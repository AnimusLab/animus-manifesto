import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.animuslab.dev"),
  title: "AnimusLab",
  description: " Independent systems research institution exploring reasoning, governance, and observability for intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ResearchOrganization",
              "name": "AnimusLab",
              "url": "https://www.animuslab.dev",
              "description":
                "Independent research institute exploring governance, reasoning, and institutional infrastructure for intelligent systems.",
              "foundingDate": "2026",
              "sameAs": [
                "https://github.com/AnimusLab"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tanishq Dasari",
              "url": "https://www.animuslab.dev",
              "jobTitle": "Founding Steward",
              "worksFor": {
                "@type": "ResearchOrganization",
                "name": "AnimusLab"
              },
              "sameAs": [
                "https://www.linkedin.com/in/tanishq-dasari10/",
                "https://github.com/Tanishq1030",
                "https://orcid.org/0009-0008-1597-1834"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
