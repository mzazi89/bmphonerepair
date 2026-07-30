import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bluetooth Devices | BM Phone Repair & Accessories',
  description: 'Smartwatches, Bluetooth receivers, car kits and wireless gadgets in Limuru Town.',
}

const products = [
  { name: 'Smart Watch Fitness Band', price: 'KSh 1,500', tag: 'Popular', desc: 'Fitness smartwatch with heart rate, steps, sleep tracking and notifications.' },
  { name: 'Bluetooth Car Receiver', price: 'KSh 600', tag: null, desc: 'AUX Bluetooth receiver — stream music wirelessly from your phone to car.' },
  { name: 'Bluetooth Transmitter/Receiver', price: 'KSh 700', tag: '2-in-1', desc: 'Works as Bluetooth TX or RX, connects non-BT devices wirelessly.' },
  { name: 'Smart Watch with Calling', price: 'KSh 2,500', tag: 'New', desc: 'Full smart watch with Bluetooth calling, AMOLED display, IP68.' },
  { name: 'Bluetooth FM Transmitter (Car)', price: 'KSh 800', tag: null, desc: 'Car FM Bluetooth transmitter with USB charging and hands-free calling.' },
  { name: 'Wireless Bluetooth Keyboard', price: 'KSh 1,200', tag: null, desc: 'Compact wireless keyboard compatible with phones, tablets and PCs.' },
  { name: 'Bluetooth Mouse', price: 'KSh 900', tag: null, desc: 'Silent Bluetooth mouse, 3 device pairing, 12 month battery life.' },
  { name: 'NFC Bluetooth Tag', price: 'KSh 200', tag: null, desc: 'NFC tags for automating phone actions — pack of 5.' },
]

export default function BluetoothPage() {
  return (
    <div className="min-h-screen bg-dark-800">
      <section className="bg-black border-b border-white/10 py-14">
        <div className="container mx-auto">
          <Link href="/accessories" className="text-sm text-steel-lighter hover:text-accent transition-colors mb-6 inline-flex items-center gap-2">
            ← Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-5xl">📡</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">Bluetooth Devices</h1>
              <p className="text-steel-lighter mt-2 max-w-xl">Smartwatches, Bluetooth receivers, car kits and wireless gadgets — all available in our Limuru shop.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card group hover:border-indigo-500/40 transition-all duration-300 flex flex-col">
                <div className="rounded-xl mb-4 h-36 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
                  📡
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-sm leading-snug">{p.name}</h3>
                  {p.tag && <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400">{p.tag}</span>}
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
            <p className="text-white font-bold text-lg mb-2">Looking for a specific gadget?</p>
            <p className="text-steel-lighter mb-6">We source most Bluetooth accessories on request — call us and we&apos;ll find it for you.</p>
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
