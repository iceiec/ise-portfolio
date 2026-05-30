import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pierre Isaiah Aguinaldo | Full-Stack Portfolio',
  description: 'Portfolio of Pierre Isaiah Aguinaldo, a fresh graduate pursuing full-stack software engineering roles.',
  generator: 'v0.app',
  icons: {
  icon: [
    { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
    { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    { url: '/icon.svg', type: 'image/svg+xml' },
  ],
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
