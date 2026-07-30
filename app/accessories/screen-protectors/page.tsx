import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Screen Protectors | BM Phone Repair & Accessories',
  description: 'Tempered glass and screen protectors for all phone models in Limuru Town.',
}

const products = [
  { name: 'Tempered Glass (Universal)', price: 'KSh 100', tag: 'Budget', desc: 'Standard 9H tempered glass protector with oleophobic coating.' },
  { name: 'Privacy Tempered Glass', price: 'KSh 300', tag: 'Privacy', desc: 'Anti-spy screen protector — only visible when looking straight on.' },
  { name: 'Full Glue Tempered Glass', price: 'KSh 200', tag: 'Popular', desc: 'Full-coverage tempered glass with full glue adhesion, no bubbles.' },
  { name: 'Matte Anti-Glare Glass', price: 'KSh 250', tag: null, desc: 'Reduces glare in bright sunlight, fingerprint resistant.' },
  { name: 'Hydrogel Flexible Protector', price: 'KSh 200', tag: 'Flexible', desc: 'Self-healing hydrogel film for curved and flat screen phones.' },
  { name: 'Camera Lens Protector', price: 'KSh 150', tag: null, desc: 'Tempered glass camera ring protector — protects your camera lenses.' },
  { name: 'Ceramic Matte Screen Film', price: 'KSh 300', tag: 'New', desc: 'Ceramic film with matte finish and ultra-smooth touch feel.' },
  { name: 'UV Curved Glass Protector', price: 'KSh 500', tag: 'Premium', desc: 'UV-cured tempered glass for Samsung curved displays — full coverage.' },
]

export default function ScreenProtectorsPage() {
  return (
    <div className="min-h-screen bg-dark-800">
      <section className="bg-black border-b border-white/10 py-14">
        <div className="container mx-auto">
          <Link href="/accessories" className="text-sm text-steel-lighter hover:text-accent transition-colors mb-6 inline-flex items-center gap-2">
            ← Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-5xl">🛡️</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">Screen Protectors</h1>
              <p className="text-steel-lighter mt-2 max-w-xl">Tempered glass, anti-glare and privacy screen protectors for all phone models. We install them in store for free.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card group hover:border-cyan-500/40 transition-all duration-300 flex flex-col">
                <div className="rounded-xl mb-4 h-36 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)' }}>
                  🛡️
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-sm leading-snug">{p.name}</h3>
                  {p.tag && <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">{p.tag}</span>}
                </div>
                <p className="text-steel-lighter text-xs leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                  <span className="font-extrabold text-accent text-base">{p.price}</span>
                  <Link href="/contact" className="text-xs font-semibold text-primary hover:text-accent transition-colors">Enquire →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
            <p className="text-white font-bold text-lg mb-2">Free installation in store!</p>
            <p className="text-steel-lighter mb-6">Buy any screen protector and we&apos;ll apply it perfectly — bubble-free, every time.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+254799554997" className="btn-accent py-3 px-6 text-sm">📞 Call Now</a>
              <Link href="/contact" className="btn-outline py-3 px-6 text-sm">Send Enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
