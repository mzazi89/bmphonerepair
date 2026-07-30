import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Power Banks | BM Phone Repair & Accessories',
  description: 'Portable power banks from 5000mAh to 30000mAh available in Limuru Town.',
}

const products = [
  { name: '5000mAh Slim Power Bank', price: 'KSh 900', tag: 'Compact', desc: 'Ultra-slim 5000mAh power bank, USB-C + USB-A, fast charge 22.5W.' },
  { name: '10000mAh Power Bank', price: 'KSh 1,400', tag: 'Popular', desc: '10000mAh dual-port power bank with display, 22.5W fast charge.' },
  { name: '20000mAh Power Bank', price: 'KSh 2,200', tag: 'High Cap', desc: '20000mAh with 65W PD, charges laptops, tablets and phones.' },
  { name: '30000mAh Power Bank', price: 'KSh 3,000', tag: 'Max', desc: 'Huge 30000mAh capacity — charge your phone up to 7 times.' },
  { name: 'Solar Power Bank 10000mAh', price: 'KSh 1,800', tag: 'Solar', desc: 'Solar panel + 10000mAh, dual USB output, LED torch built-in.' },
  { name: 'MagSafe Power Bank 5000mAh', price: 'KSh 2,500', tag: 'iPhone', desc: 'MagSafe compatible wireless power bank, attaches to iPhone magnetically.' },
  { name: 'Mini Lipstick Power Bank 2500mAh', price: 'KSh 600', tag: null, desc: 'Pocket-sized lipstick style mini power bank for emergency top-ups.' },
  { name: '15W Wireless Power Bank 10000mAh', price: 'KSh 2,000', tag: 'Wireless', desc: 'Wireless + wired power bank with 15W Qi pad and 22.5W wired.' },
]

export default function PowerBanksPage() {
  return (
    <div className="min-h-screen bg-dark-800">
      <section className="bg-black border-b border-white/10 py-14">
        <div className="container mx-auto">
          <Link href="/accessories" className="text-sm text-steel-lighter hover:text-accent transition-colors mb-6 inline-flex items-center gap-2">
            ← Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-5xl">🔋</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">Power Banks</h1>
              <p className="text-steel-lighter mt-2 max-w-xl">Stay charged anywhere — from slim 5000mAh travel banks to massive 30000mAh capacity units with fast charge support.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card group hover:border-orange-500/40 transition-all duration-300 flex flex-col">
                <div className="rounded-xl mb-4 h-36 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
                  🔋
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-sm leading-snug">{p.name}</h3>
                  {p.tag && <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400">{p.tag}</span>}
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
            <p className="text-white font-bold text-lg mb-2">Need advice on which power bank?</p>
            <p className="text-steel-lighter mb-6">We&apos;ll help you pick the right capacity for your lifestyle and budget.</p>
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
