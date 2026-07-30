import type { Metadata } from 'next'
import Link from 'next/link'
import { FaBatteryFull, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const products = [
  {
    name: '5000 mAh Slim Power Bank',
    type: 'Pocket · Lightweight',
    description: 'Ultra-slim pocket power bank that fits in any pocket or bag. Provides roughly 1–2 full charges for most phones.',
    features: ['5000 mAh', 'Pocket slim design', 'USB-A + USB-C', '~1–2 full charges'],
    badge: 'Pocket',
    badgeColor: 'bg-blue-500',
  },
  {
    name: '10000 mAh Power Bank',
    type: 'Standard · Dual Port',
    description: 'The perfect daily carry. Charges your phone 2–3 times with fast charging support via USB-C PD.',
    features: ['10000 mAh', 'USB-C PD 18W', 'Dual output ports', 'LED charge indicator'],
    badge: 'Popular',
    badgeColor: 'bg-green-500',
  },
  {
    name: '20000 mAh Power Bank',
    type: 'High Capacity · Fast Charge',
    description: 'High-capacity power bank for heavy users, travellers, and those who need multi-day backup without recharging.',
    features: ['20000 mAh', '65W fast charging', 'Charge 3 devices', 'LCD display'],
    badge: 'High Cap',
    badgeColor: 'bg-orange-500',
  },
  {
    name: 'Wireless Power Bank',
    type: 'Wireless + Wired · 10000 mAh',
    description: 'Qi wireless charging power bank. Place your phone on top to charge wirelessly or use the wired ports.',
    features: ['Qi wireless 10W', '10000 mAh', 'Wired + wireless', 'LED indicator'],
    badge: 'Wireless',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'Solar Power Bank',
    type: 'Solar · 20000 mAh',
    description: 'Rugged solar-powered power bank. Charge via solar panel or wall socket — perfect for outdoor adventures.',
    features: ['Solar + USB charge', '20000 mAh', 'Waterproof body', 'Outdoor rugged'],
    badge: 'Solar',
    badgeColor: 'bg-yellow-500',
  },
  {
    name: 'Mini Keychain Power Bank',
    type: 'Keychain · 1500–3000 mAh',
    description: 'Tiny keychain-sized emergency power bank. Always on your keys — ready for that critical low-battery moment.',
    features: ['Keychain clip', '1500–3000 mAh', 'Built-in cable', 'Emergency use'],
    badge: 'Mini',
    badgeColor: 'bg-red-500',
  },
]

export const metadata: Metadata = {
  title: 'Power Banks | BM Phone Repair & Accessories',
  description: 'Buy power banks in Limuru — pocket, high capacity, wireless, solar and mini power banks for every lifestyle.',
}

export default function PowerBanksPage() {
  return (
    <div className="min-h-screen bg-dark-800 text-white">

      <section className="py-14 bg-gradient-to-br from-red-900/20 via-dark-800 to-dark-800 border-b border-dark-600">
        <div className="container mx-auto px-4">
          <Link href="/accessories" className="inline-flex items-center gap-2 text-steel-lighter hover:text-accent text-sm mb-6 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center">
              <FaBatteryFull className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Power Banks</h1>
              <p className="text-steel-lighter mt-1">Pocket, high-capacity, wireless, solar and mini power banks</p>
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
        <p className="text-steel-lighter mb-4">Looking for a specific brand or capacity? We can source it for you.</p>
        <Link href="/contact" className="btn-accent py-2.5 px-8">Contact Us</Link>
      </section>
    </div>
  )
}
