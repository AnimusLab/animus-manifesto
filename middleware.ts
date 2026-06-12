import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Bypass robots.txt so it always serves the root robots.ts configuration
  if (url.pathname === '/robots.txt') {
    return NextResponse.next();
  }

  // Redirect main domain paths to subdomains to prevent duplicate content
  if (!hostname.startsWith('anchor.') && !hostname.startsWith('cases.') && !hostname.startsWith('case.')) {
    if (url.pathname === '/anchor' || url.pathname.startsWith('/anchor/')) {
      const isLocalhost = hostname.includes('localhost');
      const targetHost = isLocalhost ? 'anchor.localhost:3000' : 'anchor.animuslab.dev';
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.host = targetHost;
      redirectUrl.pathname = url.pathname.replace(/^\/anchor/, '') || '/';
      return NextResponse.redirect(redirectUrl, 301);
    }
    if (url.pathname === '/cases' || url.pathname.startsWith('/cases/')) {
      const isLocalhost = hostname.includes('localhost');
      const targetHost = isLocalhost ? 'cases.localhost:3000' : 'cases.animuslab.dev';
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.host = targetHost;
      redirectUrl.pathname = url.pathname.replace(/^\/cases/, '') || '/';
      return NextResponse.redirect(redirectUrl, 301);
    }
  }

  // Rewrite subdomain anchor.localhost or anchor.animuslab.dev to the /anchor path
  if (hostname.startsWith('anchor.')) {
    if (!url.pathname.startsWith('/anchor')) {
      url.pathname = `/anchor${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Rewrite subdomain cases.localhost, cases.animuslab.dev, case.localhost, case.animuslab.dev to the /cases path
  if (hostname.startsWith('cases.') || hostname.startsWith('case.')) {
    if (!url.pathname.startsWith('/cases')) {
      url.pathname = `/cases${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
