import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FaHeadphones, FaBolt, FaVolumeUp, FaMobileAlt,
  FaShieldAlt, FaBatteryFull, FaUsb, FaMicrochip
} from 'react-icons/fa'

const categories = [
  {
    href: '/accessories/earphones',
    icon: FaHeadphones,
    name: 'Earphones & Headphones',
    description: 'Wired and wireless earphones, headphones, and in-ear monitors for all budgets.',
    color: 'from-blue-600 to-blue-800',
    items: ['In-ear earphones', 'Over-ear headphones', 'Bluetooth earbuds', 'Gaming headsets'],
  },
  {
    href: '/accessories/chargers',
    icon: FaBolt,
    name: 'Chargers & Adaptors',
    description: 'Fast chargers, wall adaptors, and wireless charging pads for every phone brand.',
    color: 'from-yellow-500 to-yellow-700',
    items: ['Fast chargers', 'Wireless chargers', 'Car chargers', 'Travel adaptors'],
  },
  {
    href: '/accessories/woofers',
    icon: FaVolumeUp,
    name: 'Woofers & Speakers',
    description: 'Portable Bluetooth speakers, home woofers, mini speakers, and soundbars.',
    color: 'from-purple-600 to-purple-800',
    items: ['Bluetooth speakers', 'Mini woofers', 'Home speakers', 'Party speakers'],
  },
  {
    href: '/accessories/cases',
    icon: FaMobileAlt,
    name: 'Phone Cases & Covers',
    description: 'Slim, rugged, leather, and custom covers for iPhone, Samsung, Tecno, Infinix & more.',
    color: 'from-green-600 to-green-800',
    items: ['Back covers', 'Flip covers', 'Shockproof cases', 'Wallet cases'],
  },
  {
    href: '/accessories/screen-protectors',
    icon: FaShieldAlt,
    name: 'Screen Protectors',
    description: 'Tempered glass and film protectors that keep your display scratch-free.',
    color: 'from-cyan-600 to-cyan-800',
    items: ['Tempered glass', 'Anti-glare film', 'Privacy glass', 'Full-cover glass'],
  },
  {
    href: '/accessories/power-banks',
    icon: FaBatteryFull,
    name: 'Power Banks',
    description: 'Pocket-sized to high-capacity power banks to keep you charged anywhere.',
    color: 'from-red-600 to-red-800',
    items: ['5000 mAh', '10000 mAh', '20000 mAh', 'Solar power banks'],
  },
  {
    href: '/accessories/cables',
    icon: FaUsb,
    name: 'USB Cables & Adapters',
    description: 'Braided, fast-charging, and multi-port USB cables and OTG adapters.',
    color: 'from-orange-500 to-orange-700',
    items: ['Type-C cables', 'Lightning cables', 'Micro-USB cables', 'OTG adapters'],
  },
  {
    href: '/accessories/memory',
    icon: FaMicrochip,
    name: 'Memory Cards & Storage',
    description: 'MicroSD cards, flash drives, and storage accessories for phones and cameras.',
    color: 'from-pink-600 to-pink-800',
    items: ['MicroSD cards', 'USB flash drives', 'Card readers', 'OTG drives'],
  },
]

export const metadata: Metadata = {
  title: 'Accessories | BM Phone Repair & Accessories',
  description: 'Shop phone accessories in Limuru — earphones, chargers, woofers, cases, screen protectors, power banks, and more.',
}

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-dark-800 text-white">

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 border-b border-dark-600">
        <div className="container mx-auto text-center px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            In-Store & On Order
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Phone <span className="text-accent">Accessories</span>
          </h1>
          <p className="text-steel-lighter max-w-xl mx-auto text-lg">
            Quality accessories for every device and budget — available at our Limuru Town shop.
            Can&apos;t visit? We deliver locally.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-dark-700 border border-dark-500 rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
              >
                {/* Colour band */}
                <div className={`h-2 w-full bg-gradient-to-r ${cat.color}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-steel-lighter text-sm mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item} className="text-xs text-steel-lighter flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-block mt-5 text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                    View category →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-dark-700 border-t border-dark-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Can&apos;t find what you need?</h3>
          <p className="text-steel-lighter mb-6">Contact us — we can order specific accessories for you within 1–2 days.</p>
          <Link href="/contact" className="btn-accent py-3 px-8 text-base">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
