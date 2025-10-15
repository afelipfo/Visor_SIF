import type { Metadata } from "next"
import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sif360.vercel.app").replace(/\/$/, "")
const previewImagePath = "/fotos-expo19.jpg"
const fullPreviewImage = `${siteUrl}${previewImagePath}`

export const metadata: Metadata = {
  title: "SIF 360",
  description: "Centro de Información de la Secretaría de Infraestructura Física",
  generator: "v0.app",
  manifest: "/manifest.json",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "SIF 360",
    description: "Centro de Información de la Secretaría de Infraestructura Física",
    images: [
      {
        url: previewImagePath,
        width: 1200,
        height: 630,
        alt: "SIF 360 - Centro de Información de la Secretaría de Infraestructura Física",
      },
    ],
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIF 360",
    description: "Centro de Información de la Secretaría de Infraestructura Física",
    images: [previewImagePath],
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
        <meta property="og:title" content="SIF 360" />
        <meta property="og:description" content="Centro de Información de la Secretaría de Infraestructura Física" />
        <meta property="og:image" content={fullPreviewImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SIF 360 - Centro de Información de la Secretaría de Infraestructura Física" />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIF 360" />
        <meta name="twitter:description" content="Centro de Información de la Secretaría de Infraestructura Física" />
        <meta name="twitter:image" content={fullPreviewImage} />

        {/* General */}
        <meta name="description" content="Centro de Información de la Secretaría de Infraestructura Física" />
        <title>SIF 360</title>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
