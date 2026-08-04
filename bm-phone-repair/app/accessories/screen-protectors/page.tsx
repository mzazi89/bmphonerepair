import type { Metadata } from 'next'
import AccessoryCategoryPage from '../../components/AccessoryCategoryPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Screen Protectors | BM Phone Repair & Accessories',
  description: 'Tempered glass and film screen protectors for all phone models in Limuru.',
}

const staticFallback = [
  { name: 'Tempered Glass Screen Protector', price: 'KSh 150', tag: 'Popular', desc: '9H hardness, oleophobic coating, fits most screen sizes.' },
  { name: 'Privacy Screen Protector', price: 'KSh 350', tag: 'Privacy', desc: 'Anti-spy privacy filter, 9H tempered glass.' },
  { name: 'Full Glue Curved Protector', price: 'KSh 300', tag: null, desc: 'Edge-to-edge full glue tempered glass for curved displays.' },
]

export default function ScreenProtectorsPage() {
  return (
    <AccessoryCategoryPage
      title="Screen Protectors"
      icon="🛡️"
      category="screen-protectors"
      accentColor="#06b6d4"
      accentBg="rgba(6,182,212,0.08)"
      description="Tempered glass and film screen protectors for all major phone models. 9H hardness and anti-shatter protection."
      staticFallback={staticFallback}
    />
  )
}
