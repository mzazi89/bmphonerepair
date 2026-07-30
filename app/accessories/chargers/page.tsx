import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chargers & Cables | BM Phone Repair & Accessories',
  description: 'Fast chargers, USB-C, lightning and micro-USB cables in Limuru Town.',
}

const products = [
  { name: '65W USB-C Fast Charger', price: 'KSh 1,500', tag: 'Fast Charge', desc: 'GaN 65W USB-C wall charger compatible with phones, tablets and laptops.' },
  { name: '33W Fast Charger + USB-C Cable', price: 'KSh 900', tag: 'Popular', desc: 'Xiaomi/Redmi compatible 33W fast charger bundle.' },
  { name: 'USB-C to USB-C Cable 1m', price: 'KSh 250', tag: null, desc: '60W PD charging cable, durable braided nylon, 1 metre.' },
  { name: 'iPhone Lightning Cable', price: 'KSh 300', tag: null, desc: 'MFi certified lightning cable, 1m, compatible with all iPhones.' },
  { name: 'Micro-USB Charging Cable', price: 'KSh 150', tag: null, desc: 'Universal micro-USB cable for older Android devices.' },
  { name: '20W USB-C Wall Adapter', price: 'KSh 650', tag: null, desc: 'Compact 20W USB-C power adapter, PD support.' },
  { name: 'Wireless Charging Pad 15W', price: 'KSh 1,200', tag: 'Wireless', desc: 'Qi-compatible 15W wireless charging pad, works with all Qi devices.' },
  { name: 'Car Charger Dual USB 36W', price: 'KSh 500', tag: null, desc: 'Fast dual-port car charger with USB-A and USB-C ports.' },
  { name: '3-in-1 Charging Cable', price: 'KSh 450', tag: 'New', desc: 'Lightning + USB-C + micro-USB in one retractable cable.' },
  { name: 'Samsung 25W Super Fast Charger', price: 'KSh 1,100', tag: 'Fast Charge', desc: 'Original Samsung 25W super fast charging adapter.' },
]

export default function ChargersPage() {
  return (
    <div className="min-h-screen bg-dark-800">
      <section className="bg-black border-b border-white/10 py-14">
        <div className="container mx-auto">
          <Link href="/accessories" className="text-sm text-steel-lighter hover:text-accent transition-colors mb-6 inline-flex items-center gap-2">
            ← Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-5xl">⚡</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">Chargers & Cables</h1>
              <p className="text-steel-lighter mt-2 max-w-xl">Fast chargers, USB-C, lightning, micro-USB cables and wall adapters — all available in our Limuru shop.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card group hover:border-yellow-500/40 transition-all duration-300 flex flex-col">
                <div className="rounded-xl mb-4 h-36 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.15)' }}>
                  ⚡
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-sm leading-snug">{p.name}</h3>
                  {p.tag && <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-accent/20 text-accent">{p.tag}</span>}
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
            <p className="text-white font-bold text-lg mb-2">Need a specific charger?</p>
            <p className="text-steel-lighter mb-6">Tell us your phone model and we&apos;ll get the right charger for you.</p>
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
