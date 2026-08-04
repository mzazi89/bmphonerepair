import type { Metadata } from 'next'
import AccessoryCategoryPage from '../../components/AccessoryCategoryPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Power Banks | BM Phone Repair & Accessories',
  description: 'Portable power banks from 5000mAh to 30000mAh, fast charging models in Limuru.',
}

const staticFallback = [
  { name: '10000mAh Power Bank', price: 'KSh 1,500', tag: 'Popular', desc: 'Compact 10000mAh with dual USB, LED indicator, fast charge.' },
  { name: '20000mAh Power Bank', price: 'KSh 2,500', tag: 'Large', desc: 'Large 20000mAh with USB-C PD, charges laptops too.' },
  { name: '5000mAh Slim Power Bank', price: 'KSh 1,000', tag: 'Slim', desc: 'Ultra-slim pocket power bank, single USB-A port.' },
]

export default function PowerBanksPage() {
  return (
    <AccessoryCategoryPage
      title="Power Banks"
      icon="🔋"
      category="power-banks"
      accentColor="#f97316"
      accentBg="rgba(249,115,22,0.08)"
      description="Stay charged anywhere — power banks from 5000mAh to 30000mAh, including fast charge and USB-C PD models."
      staticFallback={staticFallback}
    />
  )
}
