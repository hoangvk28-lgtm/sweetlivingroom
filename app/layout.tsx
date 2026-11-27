import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";
import { CLARITY_PROJECT_ID } from "@/lib/brand";
import { ScrollToTop } from "@/components/ScrollToTop";

const fraunces = localFont({ src: "./fonts/fraunces-variable.woff2", variable: "--font-fraunces", weight: "100 900", display: "swap" });
const inter = localFont({ src: "./fonts/inter-variable.woff2", variable: "--font-inter", weight: "100 900", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Living Room Furniture and Decor Buying Guides`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Living Room Furniture and Decor Buying Guides`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Living Room Furniture and Decor Buying Guides`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// Microsoft Clarity project id. Defaults to sweetlivingroom's own project so
// the script ships without depending on a Cloudflare Pages build variable.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || CLARITY_PROJECT_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`} data-scroll-behavior="smooth">
      <body className="h-full antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {GA_ID && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        {CLARITY_ID && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`if(!/^\\/(cdn-cgi|lander)(\\/|$)/.test(location.pathname))(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${CLARITY_ID}");`}
          </Script>
        )}
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
