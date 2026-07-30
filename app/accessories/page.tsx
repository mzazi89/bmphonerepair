import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessories | BM Phone Repair & Accessories',
  description: 'Shop quality phone accessories in Limuru — earphones, chargers, woofers, cases, screen protectors, power banks and more.',
}

const categories = [
  {
    slug: 'earphones',
    name: 'Earphones & Headphones',
    icon: '🎧',
    description: 'Wired & wireless earphones, TWS earbuds, over-ear headphones from top brands.',
    color: 'from-blue-600/20 to-blue-900/10',
    border: 'border-blue-500/30',
    count: '20+ items',
  },
  {
    slug: 'chargers',
    name: 'Chargers & Cables',
    icon: '⚡',
    description: 'Fast chargers, USB-C, lightning, micro-USB cables and wall adapters.',
    color: 'from-yellow-500/20 to-yellow-900/10',
    border: 'border-yellow-500/30',
    count: '30+ items',
  },
  {
    slug: 'woofers',
    name: 'Speakers & Woofers',
    icon: '🔊',
    description: 'Bluetooth speakers, mini woofers, subwoofers and portable sound systems.',
    color: 'from-purple-600/20 to-purple-900/10',
    border: 'border-purple-500/30',
    count: '15+ items',
  },
  {
    slug: 'cases',
    name: 'Phone Cases & Covers',
    icon: '📱',
    description: 'Protective cases, back covers, flip wallets and armour cases for all models.',
    color: 'from-green-600/20 to-green-900/10',
    border: 'border-green-500/30',
    count: '50+ items',
  },
  {
    slug: 'screen-protectors',
    name: 'Screen Protectors',
    icon: '🛡️',
    description: 'Tempered glass, anti-glare and privacy screen protectors for all phone models.',
    color: 'from-cyan-600/20 to-cyan-900/10',
    border: 'border-cyan-500/30',
    count: '40+ items',
  },
  {
    slug: 'power-banks',
    name: 'Power Banks',
    icon: '🔋',
    description: 'Portable power banks from 5000mAh to 30000mAh with fast-charge support.',
    color: 'from-orange-600/20 to-orange-900/10',
    border: 'border-orange-500/30',
    count: '12+ items',
  },
  {
    slug: 'memory-cards',
    name: 'Memory Cards & Storage',
    icon: '💾',
    description: 'Micro SD cards, OTG flash drives and USB storage from 16GB to 1TB.',
    color: 'from-red-600/20 to-red-900/10',
    border: 'border-red-500/30',
    count: '18+ items',
  },
  {
    slug: 'bluetooth',
    name: 'Bluetooth Devices',
    icon: '📡',
    description: 'Smartwatches, Bluetooth receivers, car kits and wireless gadgets.',
    color: 'from-indigo-600/20 to-indigo-900/10',
    border: 'border-indigo-500/30',
    count: '25+ items',
  },
]

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-dark-800">
      {/* Hero */}
      <section className="relative bg-black py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-800 to-dark-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="badge">Limuru Town, Kenya</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-4">
            Phone <span className="text-primary">Accessories</span>
          </h1>
          <p className="text-steel-lighter text-lg max-w-xl mx-auto">
            Quality accessories for every need — shop by category and get what you need delivered or picked up in store.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-steel-lighter">📍 In-store pickup available</span>
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-steel-lighter">📞 Call to check stock</span>
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-steel-lighter">💰 Best prices in Limuru</span>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Browse by Category</h2>
          <p className="text-steel-lighter mb-10">Select a category to see what&apos;s available.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/accessories/${cat.slug}`}
                className={`group relative rounded-2xl border bg-gradient-to-br ${cat.color} ${cat.border} p-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer block`}
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="text-steel-lighter text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-steel-lighter bg-white/5 rounded-full px-3 py-1">{cat.count}</span>
                  <span className="text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Browse →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-steel-lighter mb-4">Don&apos;t see what you need? We can source it for you.</p>
          <Link href="/contact" className="btn-accent inline-block py-3 px-8">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
