import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Memory Cards & Storage | BM Phone Repair & Accessories',
  description: 'Micro SD cards, OTG flash drives and USB storage available in Limuru Town.',
}

const products = [
  { name: 'Micro SD Card 32GB Class 10', price: 'KSh 350', tag: null, desc: 'Class 10 32GB microSD, 80MB/s read speed, for phones and cameras.' },
  { name: 'Micro SD Card 64GB', price: 'KSh 600', tag: 'Popular', desc: '64GB microSD with adapter, U1 Class 10, ideal for videos.' },
  { name: 'Micro SD Card 128GB', price: 'KSh 1,000', tag: null, desc: '128GB high-speed microSD card with adapter, U3/V30 rated.' },
  { name: 'Micro SD Card 256GB', price: 'KSh 1,800', tag: 'High Cap', desc: '256GB microSD card, up to 100MB/s read, for heavy users.' },
  { name: 'OTG Flash Drive 32GB', price: 'KSh 450', tag: 'OTG', desc: 'Dual-head OTG USB + micro-USB flash drive for phones and PCs.' },
  { name: 'USB-C OTG Flash Drive 64GB', price: 'KSh 700', tag: 'OTG', desc: 'USB-C + USB-A dual drive, plug directly into modern Android phones.' },
  { name: 'USB 3.0 Flash Drive 64GB', price: 'KSh 500', tag: null, desc: 'Fast USB 3.0 thumb drive for PC and laptops.' },
  { name: 'MicroSD Card Reader', price: 'KSh 150', tag: null, desc: 'Compact USB + micro-USB card reader, reads all micro SD sizes.' },
]

export default function MemoryCardsPage() {
  return (
    <div className="min-h-screen bg-dark-800">
      <section className="bg-black border-b border-white/10 py-14">
        <div className="container mx-auto">
          <Link href="/accessories" className="text-sm text-steel-lighter hover:text-accent transition-colors mb-6 inline-flex items-center gap-2">
            ← Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-5xl">💾</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">Memory Cards & Storage</h1>
              <p className="text-steel-lighter mt-2 max-w-xl">MicroSD cards, OTG flash drives and USB storage from 16GB to 256GB — expand your phone or PC storage today.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card group hover:border-red-500/40 transition-all duration-300 flex flex-col">
                <div className="rounded-xl mb-4 h-36 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  💾
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-sm leading-snug">{p.name}</h3>
                  {p.tag && <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">{p.tag}</span>}
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
            <p className="text-white font-bold text-lg mb-2">Need a specific size or brand?</p>
            <p className="text-steel-lighter mb-6">We can source specific memory cards on request. Call us to check current stock.</p>
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
