import Link from 'next/link'
import { FaMemory, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const products = [
  {
    name: 'MicroSD Card 32GB',
    type: 'Storage · Class 10',
    description: 'Reliable Class 10 microSD card for photos, music, and apps. Compatible with all Android phones, cameras, and dashcams.',
    features: ['32 GB storage', 'Class 10 speed', 'Universal fit', 'Adapter included'],
    badge: 'Entry',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'MicroSD Card 64GB',
    type: 'Storage · Class 10',
    description: '64 GB microSD card with fast read/write speeds. Great for storing HD videos, games, and large files.',
    features: ['64 GB storage', 'Up to 100 MB/s read', 'UHS-I U1', 'Adapter included'],
    badge: 'Popular',
    badgeColor: 'bg-green-500',
  },
  {
    name: 'MicroSD Card 128GB / 256GB',
    type: 'Storage · UHS-I / U3',
    description: 'High-capacity microSD card for 4K video recording, drone cameras, and heavy-use phones.',
    features: ['128 GB / 256 GB', 'U3 / V30 rated', '4K video ready', 'Broad compatibility'],
    badge: 'High Cap',
    badgeColor: 'bg-orange-500',
  },
  {
    name: 'USB Flash Drive',
    type: 'Flash Drive · USB-A',
    description: 'Compact USB flash drive for transferring files between phone, PC, and other devices. Available in multiple capacities.',
    features: ['16 GB – 128 GB', 'USB 3.0 speed', 'Metal housing', 'Plug & play'],
    badge: null,
    badgeColor: '',
  },
  {
    name: 'OTG Flash Drive (Dual)',
    type: 'Flash Drive · USB-C + USB-A',
    description: 'Dual-interface flash drive with USB-C and USB-A connectors. Plug directly into your phone or laptop with no adapter needed.',
    features: ['USB-C + USB-A', 'Plug into phone directly', 'Up to 256 GB', 'Fast USB 3.1'],
    badge: 'Dual',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'SD Card Reader',
    type: 'Accessory · Card Reader',
    description: 'USB-C / USB-A multi-slot card reader for reading microSD, SD, and CF cards. Instantly turns your phone into a card reader.',
    features: ['Multi-slot', 'USB-C & USB-A', 'Plug & play', 'Compact design'],
    badge: 'Reader',
    badgeColor: 'bg-cyan-500',
  },
]

export const metadata = {
  title: 'Memory Cards & Storage | BM Phone Repair & Accessories',
  description: 'Buy memory cards and storage accessories in Limuru — microSD, flash drives, OTG drives and card readers.',
}

export default function MemoryPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">

      <section className="py-14 bg-gradient-to-br from-pink-900/20 via-dark-900 to-dark-900 border-b border-dark-600">
        <div className="container mx-auto px-4">
          <Link href="/accessories" className="inline-flex items-center gap-2 text-steel-lighter hover:text-accent text-sm mb-6 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl flex items-center justify-center">
              <FaMemory className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Memory Cards & Storage</h1>
              <p className="text-steel-lighter mt-1">MicroSD cards, flash drives, OTG drives and card readers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-dark-800 border border-dark-600 rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
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

      <section className="py-10 bg-dark-800 border-t border-dark-600 text-center">
        <p className="text-steel-lighter mb-4">Need a specific capacity or brand? We can order it for you within 1–2 days.</p>
        <Link href="/contact" className="btn-accent py-2.5 px-8">Contact Us</Link>
      </section>
    </div>
  )
}
