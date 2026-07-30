import type { Metadata } from 'next'
import Link from 'next/link'
import { FaMobileAlt, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const products = [
  {
    name: 'Clear Silicone Case',
    type: 'Back Cover · Slim',
    description: "Transparent silicone case that shows off your phone's original look while protecting against scratches and minor drops.",
    features: ['Crystal clear', 'Anti-yellowing', 'Raised edges', 'All major brands'],
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'Rugged Shockproof Case',
    type: 'Back Cover · Heavy Duty',
    description: 'Military-grade drop protection with reinforced corners. Ideal for active users and outdoor environments.',
    features: ['Military drop protection', 'Corner air-cushions', 'Non-slip grip', 'Thick protection'],
    badge: 'Tough',
    badgeColor: 'bg-red-500',
  },
  {
    name: 'Leather Flip Cover',
    type: 'Flip Cover · Leather',
    description: 'Premium faux-leather flip cover with card slot and built-in stand function. Protects front and back.',
    features: ['Card slot', 'Stand function', 'Magnetic closure', 'Premium feel'],
    badge: 'Premium',
    badgeColor: 'bg-yellow-600',
  },
  {
    name: 'Wallet Case',
    type: 'Flip Cover · Wallet',
    description: 'Multi-slot wallet case that holds your cards, cash, and ID while keeping your phone protected all-round.',
    features: ['3 card slots', 'Cash pocket', 'Detachable back', 'RFID blocking option'],
    badge: 'Wallet',
    badgeColor: 'bg-green-600',
  },
  {
    name: 'Ring Holder Stand Case',
    type: 'Back Cover · Ring Grip',
    description: 'Back case with a 360° rotating ring kickstand. Doubles as a grip and a hands-free stand for watching videos.',
    features: ['360° ring grip', 'Hands-free stand', 'Anti-slip texture', 'Slim profile'],
    badge: 'Grip',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'Designer / Custom Case',
    type: 'Back Cover · Printed',
    description: 'Stylish printed back covers with patterns, flags, logos, and custom designs. Express your style.',
    features: ['Custom print', 'Matte finish', 'Slim & lightweight', 'Wide range of designs'],
    badge: 'Style',
    badgeColor: 'bg-pink-500',
  },
]

export const metadata: Metadata = {
  title: 'Phone Cases & Covers | BM Phone Repair & Accessories',
  description: 'Shop phone cases and covers in Limuru — clear, rugged, leather flip, wallet, and designer cases for all brands.',
}

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-dark-800 text-white">

      <section className="py-14 bg-gradient-to-br from-green-900/20 via-dark-800 to-dark-800 border-b border-dark-600">
        <div className="container mx-auto px-4">
          <Link href="/accessories" className="inline-flex items-center gap-2 text-steel-lighter hover:text-accent text-sm mb-6 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center">
              <FaMobileAlt className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Phone Cases & Covers</h1>
              <p className="text-steel-lighter mt-1">Clear, rugged, leather, wallet and designer covers</p>
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
        <p className="text-steel-lighter mb-4">Don&apos;t see your phone model? Contact us — we stock cases for most brands.</p>
        <Link href="/contact" className="btn-accent py-2.5 px-8">Contact Us</Link>
      </section>
    </div>
  )
}
