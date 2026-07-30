import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phone Cases & Covers | BM Phone Repair & Accessories',
  description: 'Protective cases, back covers, flip wallets and armour cases for all phone models in Limuru.',
}

const products = [
  { name: 'Clear Silicone Case', price: 'KSh 150', tag: 'Universal', desc: 'Transparent soft silicone case, shockproof, fits most phones.' },
  { name: 'Leather Flip Wallet Case', price: 'KSh 450', tag: 'Popular', desc: 'PU leather flip case with card slots and magnetic closure.' },
  { name: 'Heavy Duty Armour Case', price: 'KSh 600', tag: 'Rugged', desc: 'Military-grade dual-layer protection with kickstand.' },
  { name: 'Matte Hard Back Cover', price: 'KSh 250', tag: null, desc: 'Slim matte hard shell case — comes in multiple colours.' },
  { name: 'Ring Stand Case', price: 'KSh 350', tag: null, desc: 'Soft case with 360° rotating ring holder for hands-free viewing.' },
  { name: 'Carbon Fibre Look Case', price: 'KSh 300', tag: 'Stylish', desc: 'Lightweight carbon-fibre texture hard case for premium feel.' },
  { name: 'Waterproof Pouch Case', price: 'KSh 400', tag: null, desc: 'Universal waterproof pouch for use near water — up to 6.9".' },
  { name: 'Magnetic Magsafe Case', price: 'KSh 800', tag: 'iPhone', desc: 'MagSafe compatible case with strong magnet for wireless charging.' },
]

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-dark-800">
      <section className="bg-black border-b border-white/10 py-14">
        <div className="container mx-auto">
          <Link href="/accessories" className="text-sm text-steel-lighter hover:text-accent transition-colors mb-6 inline-flex items-center gap-2">
            ← Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-5xl">📱</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">Phone Cases & Covers</h1>
              <p className="text-steel-lighter mt-2 max-w-xl">Protective cases, flip wallets and armour covers for all major phone models. Tell us your model and we&apos;ll find your case.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card group hover:border-green-500/40 transition-all duration-300 flex flex-col">
                <div className="rounded-xl mb-4 h-36 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  📱
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-sm leading-snug">{p.name}</h3>
                  {p.tag && <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">{p.tag}</span>}
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
            <p className="text-white font-bold text-lg mb-2">Need a case for your specific model?</p>
            <p className="text-steel-lighter mb-6">We stock cases for Samsung, iPhone, Tecno, Infinix, Redmi and more. Contact us with your model.</p>
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
