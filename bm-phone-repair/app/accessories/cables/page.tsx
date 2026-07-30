import Link from 'next/link'
import { FaUsb, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const products = [
  {
    name: 'USB-C to USB-A Cable',
    type: 'Charging & Data · USB-C',
    description: 'Braided USB-C to USB-A cable for charging and data transfer. Compatible with most modern Android phones and tablets.',
    features: ['Braided nylon', '3A fast charging', '480 Mbps data', '1m / 2m lengths'],
    badge: 'Popular',
    badgeColor: 'bg-green-500',
  },
  {
    name: 'Lightning Cable (iPhone)',
    type: 'Charging & Data · Lightning',
    description: 'MFi-compatible Lightning cable for iPhone and iPad. Fast charge with a USB-C power adaptor.',
    features: ['MFi certified', 'Fast charge support', 'Data transfer', 'All iPhones'],
    badge: 'iPhone',
    badgeColor: 'bg-gray-500',
  },
  {
    name: 'Micro-USB Cable',
    type: 'Charging & Data · Micro-USB',
    description: 'Standard Micro-USB cable for older Android phones, Bluetooth speakers, and accessories that use the Micro-USB port.',
    features: ['Universal Micro-USB', 'Fast charge 2A', 'Data sync', 'Older devices'],
    badge: null,
    badgeColor: '',
  },
  {
    name: 'USB-C to USB-C Cable',
    type: 'Charging & Data · C-to-C',
    description: 'USB-C to USB-C cable for PD fast charging between phones and laptops. Supports up to 100W on compatible chargers.',
    features: ['Up to 100W PD', 'USB 3.1 Gen 2', 'Laptop + phone', 'Braided design'],
    badge: 'Fast',
    badgeColor: 'bg-orange-500',
  },
  {
    name: '3-in-1 Multi Cable',
    type: 'Charging · Universal',
    description: 'One cable with three tips — Micro-USB, USB-C, and Lightning. Charge any device without carrying multiple cables.',
    features: ['3 connectors in 1', 'Compact & travel-ready', 'Magnetic tips available', 'Saves space'],
    badge: '3-in-1',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'OTG Adapter',
    type: 'Adapter · USB OTG',
    description: 'USB OTG adapter that lets you connect USB flash drives, keyboards, mice, and other USB devices to your phone.',
    features: ['USB-C & Micro OTG', 'Connect flash drives', 'Plug-in keyboard / mouse', 'Compact dongle'],
    badge: 'OTG',
    badgeColor: 'bg-purple-500',
  },
]

export const metadata = {
  title: 'USB Cables & Adapters | BM Phone Repair & Accessories',
  description: 'Buy USB cables and adapters in Limuru — USB-C, Lightning, Micro-USB, 3-in-1 cables and OTG adapters.',
}

export default function CablesPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">

      <section className="py-14 bg-gradient-to-br from-orange-900/20 via-dark-900 to-dark-900 border-b border-dark-600">
        <div className="container mx-auto px-4">
          <Link href="/accessories" className="inline-flex items-center gap-2 text-steel-lighter hover:text-accent text-sm mb-6 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center">
              <FaUsb className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">USB Cables & Adapters</h1>
              <p className="text-steel-lighter mt-1">USB-C, Lightning, Micro-USB, multi cables and OTG adapters</p>
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
        <p className="text-steel-lighter mb-4">Need a specific length, colour, or brand? Contact us and we'll sort you out.</p>
        <Link href="/contact" className="btn-accent py-2.5 px-8">Contact Us</Link>
      </section>
    </div>
  )
}
