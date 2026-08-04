import type { Metadata } from 'next'
import AccessoryCategoryPage from '../../components/AccessoryCategoryPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Memory Cards & Storage | BM Phone Repair & Accessories',
  description: 'SD cards, OTG flash drives and micro SD cards for phones and cameras in Limuru.',
}

const staticFallback = [
  { name: '64GB Micro SD Card', price: 'KSh 900', tag: 'Popular', desc: 'Class 10 A1, read 100MB/s, compatible with most Android phones.' },
  { name: '128GB Micro SD Card', price: 'KSh 1,500', tag: 'Best Value', desc: 'Class 10 A2, read 120MB/s, ideal for cameras and phones.' },
  { name: '32GB OTG Flash Drive', price: 'KSh 700', tag: null, desc: 'Dual connector OTG flash drive — USB-A and micro-USB.' },
]

export default function MemoryCardsPage() {
  return (
    <AccessoryCategoryPage
      title="Memory Cards & Storage"
      icon="💾"
      category="memory-cards"
      accentColor="#84cc16"
      accentBg="rgba(132,204,22,0.08)"
      description="Micro SD cards, OTG flash drives and memory cards for phones, cameras and tablets."
      staticFallback={staticFallback}
    />
  )
}
