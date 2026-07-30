import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BM Phone Repair & Accessories | Limuru Town',
  description: 'Professional phone repair and accessories shop in Limuru Town. We fix all smartphone brands — screen replacement, battery, charging port, and more. House-to-house repair available on request.',
  keywords: 'phone repair Limuru, phone repair Kenya, screen replacement Limuru, BM phone repair, smartphone repair, accessories Limuru',
  authors: [{ name: 'BM Phone Repair & Accessories' }],
  openGraph: {
    title: 'BM Phone Repair & Accessories | Limuru Town',
    description: 'Professional phone repair services in Limuru Town. House-to-house repair on request. Prices negotiable.',
    siteName: 'BM Phone Repair & Accessories',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-dark-800">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
