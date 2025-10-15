import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "VisorSIF",
  description: "Centro de Información Centralizado de la Secretaría de Infraestructura Física",
  generator: "v0.app",
  manifest: "/manifest.json",
  openGraph: {
    title: "VisorSIF",
    description: "Centro de Información Centralizado de la Secretaría de Infraestructura Física",
    images: [
      {
        url: "https://visor-sif.vercel.app/fotos-expo19.jpg",
        width: 1200,
        height: 630,
        alt: "VisorSIF - Centro de Información Centralizado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VisorSIF",
    description: "Centro de Información Centralizado de la Secretaría de Infraestructura Física",
    images: ["https://visor-sif.vercel.app/fotos-expo19.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VisorSIF" />
        <meta property="og:description" content="Centro de Información Centralizado de la Secretaría de Infraestructura Física" />
        <meta property="og:image" content="https://visor-sif.vercel.app/fotos-expo19.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="VisorSIF - Centro de Información Centralizado" />
        <meta property="og:url" content="https://visor-sif.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VisorSIF" />
        <meta name="twitter:description" content="Centro de Información Centralizado de la Secretaría de Infraestructura Física" />
        <meta name="twitter:image" content="https://visor-sif.vercel.app/fotos-expo19.jpg" />

        {/* General */}
        <meta name="description" content="Centro de Información Centralizado de la Secretaría de Infraestructura Física" />
        <title>VisorSIF</title>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
