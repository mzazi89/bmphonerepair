import type { Metadata } from 'next'
import AccessoryCategoryPage from '../../components/AccessoryCategoryPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Earphones & Headphones | BM Phone Repair & Accessories',
  description: 'Shop wired earphones, wireless earbuds and over-ear headphones in Limuru Town.',
}

const staticFallback = [
  { name: 'Samsung AKG Wired Earphones', price: 'KSh 350', tag: 'Popular', desc: 'Original Samsung earphones with mic and volume control.' },
  { name: 'TWS Bluetooth Earbuds', price: 'KSh 800', tag: 'Wireless', desc: 'True wireless stereo earbuds with charging case, 4h playback.' },
  { name: 'Deep Bass Wired Earphones', price: 'KSh 250', tag: null, desc: 'High-bass 3.5mm earphones compatible with all phones.' },
  { name: 'Over-Ear Gaming Headset', price: 'KSh 1,200', tag: 'New', desc: 'Noise-cancelling over-ear headset with LED & mic.' },
]

export default function EarphonesPage() {
  return (
    <AccessoryCategoryPage
      title="Earphones & Headphones"
      icon="🎧"
      category="earphones"
      accentColor="#3b82f6"
      accentBg="rgba(59,130,246,0.08)"
      description="Wired & wireless earphones, TWS earbuds and over-ear headphones from top brands — all available at our Limuru store."
      staticFallback={staticFallback}
    />
  )
}
