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
  title: 'BM Phone & Electronics Repair | Professional Device Repair',
  description: 'Expert phone, tablet, laptop, and gaming console repair services. Fast, reliable, and affordable repairs in your area.',
  keywords: 'phone repair, electronics repair, iPhone repair, Samsung repair, laptop repair, tablet repair',
  authors: [{ name: 'BM Repair' }],
  openGraph: {
    title: 'BM Phone & Electronics Repair',
    description: 'Professional device repair services',
    url: 'https://bm-repair.vercel.app',
    siteName: 'BM Phone & Electronics Repair',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
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
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
