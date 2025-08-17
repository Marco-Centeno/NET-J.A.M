import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "NET-J.A.M | Consultoría de Software Premium - Desarrollo Web, Apps Móviles e IA",
  description:
    "Consultoría profesional especializada en desarrollo web, aplicaciones móviles, soluciones en la nube e IA. Transformamos ideas en soluciones digitales innovadoras.",
  keywords:
    "consultoría software, desarrollo web, apps móviles, soluciones nube, inteligencia artificial, soporte tecnológico, NET-J.A.M, desarrollo custom",
  authors: [{ name: "NET-J.A.M" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://net-jam.com",
  },
  openGraph: {
    title: "NET-J.A.M | Consultoría de Software Premium",
    description:
      "Transformamos ideas en soluciones tecnológicas innovadoras. Especialistas en desarrollo web, apps móviles y soluciones de IA.",
    type: "website",
    locale: "es_ES",
    url: "https://net-jam.com",
    siteName: "NET-J.A.M",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NET-J.A.M - Consultoría de Software Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NET-J.A.M | Consultoría de Software Premium",
    description: "Consultoría profesional en desarrollo de software y tecnología de vanguardia.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} dark`}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NET-J.A.M",
              description: "Consultoría profesional especializada en desarrollo de software",
              url: "https://net-jam.com",
              logo: "https://net-jam.com/favicon.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              sameAs: ["https://www.facebook.com/netjam", "https://www.linkedin.com/company/net-jam"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
              offers: {
                "@type": "Service",
                serviceType: [
                  "Desarrollo Web",
                  "Aplicaciones Móviles",
                  "Soluciones en la Nube",
                  "Inteligencia Artificial",
                  "Soporte Tecnológico",
                ],
              },
            }),
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased gradient-bg min-h-screen">{children}</body>
    </html>
  )
}
