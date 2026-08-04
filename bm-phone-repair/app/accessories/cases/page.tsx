import type { Metadata } from 'next'
import AccessoryCategoryPage from '../../components/AccessoryCategoryPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Phone Cases & Covers | BM Phone Repair & Accessories',
  description: 'Protective cases, back covers, flip wallets and armour cases for all phone models in Limuru.',
}

const staticFallback = [
  { name: 'Clear Silicone Case', price: 'KSh 150', tag: 'Universal', desc: 'Transparent soft silicone case, shockproof, fits most phones.' },
  { name: 'Leather Flip Wallet Case', price: 'KSh 450', tag: 'Popular', desc: 'PU leather flip case with card slots and magnetic closure.' },
  { name: 'Heavy Duty Armour Case', price: 'KSh 600', tag: 'Rugged', desc: 'Military-grade dual-layer protection with kickstand.' },
  { name: 'Ring Stand Case', price: 'KSh 350', tag: null, desc: 'Soft case with 360° rotating ring holder for hands-free viewing.' },
]

export default function CasesPage() {
  return (
    <AccessoryCategoryPage
      title="Phone Cases & Covers"
      icon="📱"
      category="cases"
      accentColor="#22c55e"
      accentBg="rgba(34,197,94,0.08)"
      description="Protective cases, flip wallets and armour covers for all major phone models. Tell us your model and we'll find your case."
      staticFallback={staticFallback}
    />
  )
}
