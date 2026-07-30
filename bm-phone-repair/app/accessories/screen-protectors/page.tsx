import type { Metadata } from 'next'
import Link from 'next/link'
import { FaShieldAlt, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const products = [
  {
    name: 'Standard Tempered Glass',
    type: 'Tempered Glass · 9H',
    description: '9H hardness tempered glass protector. Ultra-thin, easy to apply, and highly responsive to touch.',
    features: ['9H hardness', 'Ultra-thin 0.3 mm', 'Easy bubble-free fit', 'All brands'],
    badge: 'Best Value',
    badgeColor: 'bg-green-500',
  },
  {
    name: 'Full-Cover Tempered Glass',
    type: 'Tempered Glass · Edge-to-Edge',
    description: 'Full-screen edge-to-edge tempered glass that protects the entire display including the curved edges.',
    features: ['Edge-to-edge coverage', '3D curved glass', '9H hardness', 'Samsung / iPhone'],
    badge: 'Full Cover',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'Privacy Screen Protector',
    type: 'Tempered Glass · Anti-Spy',
    description: 'Anti-spy screen protector that blocks side-angle viewing. Only visible to the person directly in front.',
    features: ['Anti-spy 30° angle', 'Touch sensitive', 'Scratch resistant', 'Office & travel'],
    badge: 'Privacy',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'Anti-Glare Film',
    type: 'Film · Matte Finish',
    description: 'Matte anti-glare film protector. Reduces fingerprints, reduces reflections, and makes outdoor visibility easier.',
    features: ['Matte finish', 'Anti-fingerprint', 'Anti-glare', 'Self-healing film'],
    badge: 'Matte',
    badgeColor: 'bg-gray-500',
  },
  {
    name: 'Camera Lens Protector',
    type: 'Tempered Glass · Lens Cover',
    description: 'Round tempered glass covers for the rear camera lenses. Prevents scratches without affecting photo quality.',
    features: ['Optical clarity', 'Camera cutout fit', '9H hardness', 'Multi-lens sets'],
    badge: 'Camera',
    badgeColor: 'bg-orange-500',
  },
  {
    name: 'Self-Healing Hydrogel Film',
    type: 'Film · Hydrogel',
    description: 'Flexible self-healing hydrogel film that repairs minor scratches by itself over time. Works on curved screens.',
    features: ['Self-healing', 'Flexible for curves', 'No bubbles', 'Ultra-thin'],
    badge: 'Hydrogel',
    badgeColor: 'bg-cyan-500',
  },
]

export const metadata: Metadata = {
  title: 'Screen Protectors | BM Phone Repair & Accessories',
  description: 'Buy screen protectors in Limuru — tempered glass, full cover, privacy, anti-glare, hydrogel and camera lens protectors.',
}

export default function ScreenProtectorsPage() {
  return (
    <div className="min-h-screen bg-dark-800 text-white">

      <section className="py-14 bg-gradient-to-br from-cyan-900/20 via-dark-800 to-dark-800 border-b border-dark-600">
        <div className="container mx-auto px-4">
          <Link href="/accessories" className="inline-flex items-center gap-2 text-steel-lighter hover:text-accent text-sm mb-6 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-2xl flex items-center justify-center">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Screen Protectors</h1>
              <p className="text-steel-lighter mt-1">Tempered glass, privacy, anti-glare and hydrogel protectors</p>
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
        <p className="text-steel-lighter mb-4">Need professional fitting? We also apply screen protectors in-store — no bubbles guaranteed.</p>
        <Link href="/contact" className="btn-accent py-2.5 px-8">Contact Us</Link>
      </section>
    </div>
  )
}
