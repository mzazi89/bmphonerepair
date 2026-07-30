import Link from 'next/link'
import { FaVolumeUp, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const products = [
  {
    name: 'Mini Bluetooth Speaker',
    type: 'Portable · Bluetooth 5.0',
    description: 'Compact pocket-sized Bluetooth speaker with surprisingly powerful sound. Waterproof, dustproof, and lasts all day on a single charge.',
    features: ['IPX5 waterproof', 'Up to 10 hrs battery', 'Bluetooth 5.0', 'Built-in mic'],
    badge: 'Portable',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'Party Bluetooth Woofer',
    type: 'Portable · High Volume',
    description: 'High-volume Bluetooth woofer with deep bass and LED lights. Built for outdoor parties, picnics, and gatherings.',
    features: ['Deep bass woofer', 'LED party lights', 'TF card / USB support', 'Up to 8 hrs'],
    badge: 'Party',
    badgeColor: 'bg-pink-500',
  },
  {
    name: 'Home Desktop Speaker',
    type: 'Desktop · Wired / AUX',
    description: 'Two-channel desktop speaker set with rich stereo sound. Connects via AUX or Bluetooth. Ideal for home use.',
    features: ['Stereo 2.0', 'AUX + Bluetooth', 'Volume knob', 'USB powered'],
    badge: 'Home',
    badgeColor: 'bg-green-500',
  },
  {
    name: '2.1 Subwoofer System',
    type: 'Home · 2.1 Channel',
    description: 'A powerful 2.1 speaker system with a dedicated subwoofer for deep, rumbling bass. Perfect for music rooms and living areas.',
    features: ['Dedicated subwoofer', 'Deep bass output', 'Remote control', 'AUX / BT / USB'],
    badge: 'Bass',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'Karaoke Bluetooth Speaker',
    type: 'Portable · Microphone Support',
    description: 'Fun karaoke speaker with wireless mic support. Lights up the room with LED effects and crisp vocal performance.',
    features: ['Wireless mic support', 'Echo & reverb control', 'LED lights', 'Rechargeable'],
    badge: 'Karaoke',
    badgeColor: 'bg-yellow-500',
  },
  {
    name: 'Sound Bar',
    type: 'Home · Wired / BT',
    description: 'Slim TV soundbar that dramatically improves TV audio. Connects via HDMI ARC, optical, or Bluetooth.',
    features: ['HDMI ARC / Optical', 'Surround simulation', 'Remote included', 'Wall mountable'],
    badge: 'TV',
    badgeColor: 'bg-red-500',
  },
]

export const metadata = {
  title: 'Woofers & Speakers | BM Phone Repair & Accessories',
  description: 'Buy Bluetooth speakers, woofers and soundbars in Limuru — mini portable, party, home and karaoke speakers available.',
}

export default function WoofersPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">

      <section className="py-14 bg-gradient-to-br from-purple-900/30 via-dark-900 to-dark-900 border-b border-dark-600">
        <div className="container mx-auto px-4">
          <Link href="/accessories" className="inline-flex items-center gap-2 text-steel-lighter hover:text-accent text-sm mb-6 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
              <FaVolumeUp className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Woofers & Speakers</h1>
              <p className="text-steel-lighter mt-1">Portable, party, home, and karaoke audio systems</p>
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
        <p className="text-steel-lighter mb-4">Looking for a specific brand or model? We can order it for you in 1–2 days.</p>
        <Link href="/contact" className="btn-accent py-2.5 px-8">Contact Us</Link>
      </section>
    </div>
  )
}
