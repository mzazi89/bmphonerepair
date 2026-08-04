import type { Metadata } from 'next'
import AccessoryCategoryPage from '../../components/AccessoryCategoryPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Chargers & Cables | BM Phone Repair & Accessories',
  description: 'Fast chargers, USB-C, lightning, micro-USB cables and wall adapters in Limuru.',
}

const staticFallback = [
  { name: 'USB-C Fast Charger 65W', price: 'KSh 950', tag: 'Fast', desc: 'GaN 65W USB-C charger, charges most phones in under 1 hour.' },
  { name: 'Lightning Cable 1m', price: 'KSh 250', tag: null, desc: 'Braided lightning cable for iPhone, durable and fast charging.' },
  { name: 'Micro-USB Cable Pack x2', price: 'KSh 200', tag: 'Value', desc: 'Two-pack micro-USB cables, 1m length, compatible with Android.' },
  { name: 'Car Charger Dual USB', price: 'KSh 350', tag: null, desc: 'Dual-port car charger, 24W total output, smart IC chip.' },
]

export default function ChargersPage() {
  return (
    <AccessoryCategoryPage
      title="Chargers & Cables"
      icon="⚡"
      category="chargers"
      accentColor="#eab308"
      accentBg="rgba(234,179,8,0.08)"
      description="Fast chargers, USB-C, lightning, micro-USB cables and wall adapters — all brands supported."
      staticFallback={staticFallback}
    />
  )
}
