import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"
import GoogleAnalytics from "./GoogleAnalytics"

// Done
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Helps with font loading
  variable: '--font-inter', // Add a CSS variable
  fallback: ['system-ui', 'arial', 'sans-serif'], // Add fallback fonts
  preload: false // Disable preloading if network is unreliable
})

export const metadata: Metadata = {
  title: "Unisuntec Service - Tecnologia que não para",
  description: "Serviços de elevadores: instalação, manutenção, modernização e reparos. Atendimento 24 horas.",
  keywords: ["elevadores", "manutenção", "instalação", "modernização", "reparos", "atendimento 24 horas"],
  authors: [{ name: "Unisuntec Service" }],
  openGraph: {
    title: "Unisuntec Service - Tecnologia que não para",
    description: "Serviços de elevadores: instalação, manutenção, modernização e reparos. Atendimento 24 horas.",
    url: "https://www.unisuntec.com.br",
    siteName: "Unisuntec Service",
    images: [
      {
        url: "https://www.unisuntec.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unisuntec Service - Serviços de Elevadores",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unisuntec Service - Tecnologia que não para",
    description: "Serviços de elevadores: instalação, manutenção, modernização e reparos. Atendimento 24 horas.",
    images: ["https://www.unisuntec.com.br/unisuntec.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${inter.className}`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}