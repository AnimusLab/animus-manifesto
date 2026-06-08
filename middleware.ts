import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

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
