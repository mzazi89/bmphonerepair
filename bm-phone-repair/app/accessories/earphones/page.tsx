import Link from 'next/link'
import { FaHeadphones, FaBluetooth, FaPlug, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const products = [
  {
    name: 'Basic Wired Earphones',
    type: 'In-ear · Wired',
    description: 'Stereo sound earphones with 3.5 mm jack. Compatible with most Android phones. Includes mic and volume control.',
    features: ['3.5 mm jack', 'Built-in mic', 'Noise isolation', 'All brands'],
    badge: 'Best Value',
    badgeColor: 'bg-green-500',
  },
  {
    name: 'Type-C Earphones',
    type: 'In-ear · Wired · USB-C',
    description: 'High-quality earphones with USB Type-C connector — ideal for modern Android phones without a headphone jack.',
    features: ['USB-C connector', 'Hi-Res audio', 'Inline controls', 'Samsung/Tecno/Infinix'],
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'Lightning Earphones',
    type: 'In-ear · Wired · Lightning',
    description: 'Apple MFi-compatible earphones with Lightning connector for iPhone users. Clear audio with mic support.',
    features: ['Lightning connector', 'iPhone compatible', 'Clear call quality', 'Mic + controls'],
    badge: 'iPhone',
    badgeColor: 'bg-gray-500',
  },
  {
    name: 'Bluetooth Earbuds',
    type: 'In-ear · Wireless',
    description: 'Compact TWS Bluetooth earbuds with charging case. Long battery life, touch controls, and clear call quality.',
    features: ['Bluetooth 5.0', 'Touch controls', 'Charging case', '~20 hrs total'],
    badge: 'Wireless',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'Over-Ear Headphones',
    type: 'On-ear · Wired/BT',
    description: 'Comfortable cushioned over-ear headphones. Available in wired (3.5 mm) and Bluetooth versions.',
    features: ['Deep bass', 'Cushioned earcups', 'Foldable design', 'Wired & BT available'],
    badge: null,
    badgeColor: '',
  },
  {
    name: 'Gaming Headset',
    type: 'Over-ear · Wired',
    description: 'RGB gaming headset with surround sound and boom microphone. Great for mobile gaming and streaming.',
    features: ['Surround sound', 'Boom mic', 'RGB lighting', 'Universal 3.5 mm'],
    badge: 'Gaming',
    badgeColor: 'bg-red-500',
  },
]

export const metadata = {
  title: 'Earphones & Headphones | BM Phone Repair & Accessories',
  description: 'Shop earphones and headphones in Limuru — wired, wireless, Bluetooth, and gaming headsets at affordable prices.',
}

export default function EarphonesPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">

      {/* Breadcrumb & Hero */}
      <section className="py-14 bg-gradient-to-br from-blue-900/30 via-dark-900 to-dark-900 border-b border-dark-600">
        <div className="container mx-auto px-4">
          <Link href="/accessories" className="inline-flex items-center gap-2 text-steel-lighter hover:text-accent text-sm mb-6 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
              <FaHeadphones className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Earphones & Headphones</h1>
              <p className="text-steel-lighter mt-1">Wired, wireless, and Bluetooth audio accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-dark-800 border border-dark-600 rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
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
              <Link
                href="/contact"
                className="w-full block text-center bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-black font-semibold text-sm py-2 rounded-lg transition-all"
              >
                Enquire / Order
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 bg-dark-800 border-t border-dark-600 text-center">
        <p className="text-steel-lighter mb-4">Need a specific model? We can order it for you.</p>
        <Link href="/contact" className="btn-accent py-2.5 px-8">Contact Us</Link>
      </section>
    </div>
  )
}
