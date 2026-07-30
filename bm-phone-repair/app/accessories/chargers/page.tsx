import type { Metadata } from 'next'
import Link from 'next/link'
import { FaBolt, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const products = [
  {
    name: '5W Wall Charger',
    type: 'Wall Adaptor · USB-A',
    description: 'Standard USB-A wall adaptor compatible with all phones via USB cable. Lightweight and reliable for daily use.',
    features: ['5V / 1A output', 'Universal USB-A', 'Lightweight', 'All brands'],
    badge: 'Basic',
    badgeColor: 'bg-gray-500',
  },
  {
    name: '18W Fast Charger',
    type: 'Wall Adaptor · USB-C PD',
    description: 'Quick Charge 3.0 / PD fast wall charger. Charges most modern Android phones and iPhones rapidly.',
    features: ['18W output', 'Quick Charge 3.0', 'USB-C PD', 'Universal'],
    badge: 'Fast',
    badgeColor: 'bg-yellow-500',
  },
  {
    name: '33W / 65W Super Charger',
    type: 'Wall Adaptor · GaN',
    description: 'GaN technology charger that delivers 33W–65W power. Slim, safe, and charges your phone from 0–80% in under 30 mins.',
    features: ['33W or 65W', 'GaN technology', 'Multi-port available', 'Phone + laptop'],
    badge: 'Super Fast',
    badgeColor: 'bg-orange-500',
  },
  {
    name: 'Wireless Charging Pad',
    type: 'Wireless · Qi',
    description: 'Qi-standard wireless charging pad. Place your phone on it and charge without plugging in — compatible with iPhone & Android.',
    features: ['10W Qi wireless', 'iPhone & Android', 'LED indicator', 'Slim pad design'],
    badge: 'Wireless',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'Car Charger',
    type: 'Car Adaptor · 2-Port',
    description: 'Dual-port car charger with USB-A + USB-C. Keeps your phone powered on every journey without overheating.',
    features: ['Dual output ports', 'USB-A + USB-C', 'Overcharge protection', 'All car types'],
    badge: 'Car',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'Desktop Multi-Port Charger',
    type: 'Desk Station · 4–6 Ports',
    description: 'Charge multiple devices simultaneously from a single desk station. Perfect for families or offices.',
    features: ['4–6 USB ports', '60W total output', 'Smart IC', 'Home & office'],
    badge: 'Multi-Device',
    badgeColor: 'bg-green-500',
  },
]

export const metadata: Metadata = {
  title: 'Chargers & Adaptors | BM Phone Repair & Accessories',
  description: 'Buy phone chargers in Limuru — fast chargers, wireless pads, car chargers and travel adaptors at affordable prices.',
}

export default function ChargersPage() {
  return (
    <div className="min-h-screen bg-dark-800 text-white">

      <section className="py-14 bg-gradient-to-br from-yellow-900/20 via-dark-800 to-dark-800 border-b border-dark-600">
        <div className="container mx-auto px-4">
          <Link href="/accessories" className="inline-flex items-center gap-2 text-steel-lighter hover:text-accent text-sm mb-6 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center">
              <FaBolt className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Chargers & Adaptors</h1>
              <p className="text-steel-lighter mt-1">Fast chargers, wireless pads, car chargers and more</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-dark-700 border border-dark-500 rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-white">{product.name}</h2>
                  <span className="text-xs text-steel-lighter">{product.type}</span>
                </div>
                {product.badge && (
                  <span className={`${product.badgeColor} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-steel-lighter text-sm leading-relaxed mb-4">{product.description}</p>
              <ul className="space-y-1.5 mb-5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-steel-lighter">
                    <FaCheckCircle className="text-accent text-xs flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full block text-center bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-black font-semibold text-sm py-2 rounded-lg transition-all">
                Enquire / Order
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-dark-700 border-t border-dark-600 text-center">
        <p className="text-steel-lighter mb-4">Looking for a specific charger brand or wattage? We can source it for you.</p>
        <Link href="/contact" className="btn-accent py-2.5 px-8">Contact Us</Link>
      </section>
    </div>
  )
}
