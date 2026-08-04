import type { Metadata } from 'next'
import AccessoryCategoryPage from '../../components/AccessoryCategoryPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Speakers & Woofers | BM Phone Repair & Accessories',
  description: 'Bluetooth speakers, mini woofers, subwoofers and portable sound systems in Limuru.',
}

const staticFallback = [
  { name: 'JBL Bluetooth Speaker Mini', price: 'KSh 2,800', tag: 'Popular', desc: 'Compact waterproof Bluetooth speaker, 10h battery, deep bass.' },
  { name: 'Portable Subwoofer', price: 'KSh 3,800', tag: 'Bass', desc: 'Powerful portable subwoofer, 360° sound, RGB lighting.' },
  { name: 'Wireless Bookshelf Speaker', price: 'KSh 4,500', tag: null, desc: 'Hi-fi stereo bookshelf speakers with Bluetooth 5.0.' },
]

export default function WoofersPage() {
  return (
    <AccessoryCategoryPage
      title="Speakers & Woofers"
      icon="🔊"
      category="woofers"
      accentColor="#a855f7"
      accentBg="rgba(168,85,247,0.08)"
      description="Bluetooth speakers, mini woofers, subwoofers and portable sound systems — for home, office and outdoor use."
      staticFallback={staticFallback}
    />
  )
}
