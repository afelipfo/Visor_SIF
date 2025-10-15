import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SIF360",
  description: "Centro de Información de la Secretaría de Infraestructura Física",
  generator: "v0.app",
  manifest: "/manifest.json",
  openGraph: {
    title: "SIF360",
    description: "Centro de Información de la Secretaría de Infraestructura Física",
    images: [
      {
        url: "https://visor-sif.vercel.app/fotos-expo19.jpg",
        width: 1200,
        height: 630,
        alt: "SIF360 - Centro de Información de la Secretaría de Infraestructura Física",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIF360",
    description: "Centro de Información de la Secretaría de Infraestructura Física",
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
        <meta property="og:title" content="SIF360" />
        <meta property="og:description" content="Centro de Informacion de la Secretaria de Infraestructura Fisica" />
        <meta property="og:image" content="https://visor-sif.vercel.app/fotos-expo19.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SIF360 - Centro de Informacion de la Secretaria de Infraestructura Fisica" />
        <meta property="og:url" content="https://visor-sif.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIF360" />
        <meta name="twitter:description" content="Centro de Informacion de la Secretaria de Infraestructura Fisica" />
        <meta name="twitter:image" content="https://visor-sif.vercel.app/fotos-expo19.jpg" />

        {/* General */}
        <meta name="description" content="Centro de Informacion de la Secretaria de Infraestructura Fisica" />
        <title>SIF360</title>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
