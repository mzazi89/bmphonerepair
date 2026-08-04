import type { Metadata } from 'next'
import AccessoryCategoryPage from '../../components/AccessoryCategoryPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Bluetooth Devices | BM Phone Repair & Accessories',
  description: 'Smartwatches, Bluetooth receivers, wireless mice and keyboards in Limuru.',
}

const staticFallback = [
  { name: 'Bluetooth Smartwatch', price: 'KSh 3,200', tag: 'Popular', desc: 'Fitness smartwatch, heart rate monitor, sleep tracking, IP67.' },
  { name: 'Wireless Earbuds Pro', price: 'KSh 1,800', tag: 'ANC', desc: 'ANC active noise cancelling, 30h total battery, fast pair.' },
  { name: 'Bluetooth Receiver 3.5mm', price: 'KSh 450', tag: null, desc: 'Turn any wired speaker into Bluetooth — 3.5mm aux jack.' },
]

export default function BluetoothPage() {
  return (
    <AccessoryCategoryPage
      title="Bluetooth Devices"
      icon="📡"
      category="bluetooth"
      accentColor="#8b5cf6"
      accentBg="rgba(139,92,246,0.08)"
      description="Smartwatches, wireless earbuds, Bluetooth receivers and more — all available in Limuru Town."
      staticFallback={staticFallback}
    />
  )
}
