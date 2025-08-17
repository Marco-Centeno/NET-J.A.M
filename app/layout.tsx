import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "NET-J.A.M | Consultoría de Software Premium",
  description:
    "Consultoría profesional especializada en desarrollo web, aplicaciones móviles, soluciones en la nube, IA y soporte tecnológico. Innovación y tecnología de vanguardia.",
  keywords:
    "consultoría software, desarrollo web, apps móviles, soluciones nube, inteligencia artificial, soporte tecnológico",
  authors: [{ name: "NET-J.A.M" }],
  openGraph: {
    title: "NET-J.A.M | Consultoría de Software Premium",
    description:
      "Transformamos ideas en soluciones tecnológicas innovadoras. Especialistas en desarrollo web, apps móviles y soluciones de IA.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "NET-J.A.M | Consultoría de Software Premium",
    description: "Consultoría profesional en desarrollo de software y tecnología de vanguardia.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} dark`}>
      <body className="font-sans antialiased gradient-bg min-h-screen">{children}</body>
    </html>
  )
}
