import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Earphones & Headphones | BM Phone Repair & Accessories',
  description: 'Shop wired earphones, wireless earbuds and over-ear headphones in Limuru Town.',
}

const products = [
  { name: 'Samsung AKG Wired Earphones', price: 'KSh 350', tag: 'Popular', desc: 'Original Samsung earphones with mic and volume control.' },
  { name: 'TWS Bluetooth Earbuds', price: 'KSh 800', tag: 'Wireless', desc: 'True wireless stereo earbuds with charging case, 4h playback.' },
  { name: 'Deep Bass Wired Earphones', price: 'KSh 250', tag: null, desc: 'High-bass 3.5mm earphones compatible with all phones.' },
  { name: 'Over-Ear Gaming Headset', price: 'KSh 1,200', tag: 'New', desc: 'Noise-cancelling over-ear headset with LED & mic.' },
  { name: 'iPhone Lightning Earphones', price: 'KSh 450', tag: null, desc: 'Compatible with iPhone 7 and above, lightning connector.' },
  { name: 'Bluetooth Neckband Earphones', price: 'KSh 950', tag: 'Wireless', desc: 'Magnetic neckband design, 8h battery, IPX5 water resistant.' },
  { name: 'Sport In-Ear Earphones', price: 'KSh 300', tag: null, desc: 'Sweat-proof sport earphones with ear hooks for secure fit.' },
  { name: 'USB-C Earphones', price: 'KSh 400', tag: null, desc: 'USB Type-C connector earphones for newer Android devices.' },
]

export default function EarphonesPage() {
  return <CategoryPage title="Earphones & Headphones" icon="🎧" backHref="/accessories" products={products} accentColor="#3b82f6" description="Wired & wireless earphones, TWS earbuds and over-ear headphones from top brands — all available at our Limuru store." />
}

function CategoryPage({ title, icon, backHref, products, accentColor, description }: {
  title: string
  icon: string
  backHref: string
  products: { name: string; price: string; tag: string | null; desc: string }[]
  accentColor: string
  description: string
}) {
  return (
    <div className="min-h-screen bg-dark-800">
      {/* Header */}
      <section className="bg-black border-b border-white/10 py-14">
        <div className="container mx-auto">
          <Link href={backHref} className="text-sm text-steel-lighter hover:text-accent transition-colors mb-6 inline-flex items-center gap-2">
            ← Back to Accessories
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-5xl">{icon}</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">{title}</h1>
              <p className="text-steel-lighter mt-2 max-w-xl">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card group hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Placeholder image area */}
                <div className="rounded-xl mb-4 h-36 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}25` }}>
                  {icon}
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-sm leading-snug">{p.name}</h3>
                  {p.tag && (
                    <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-accent/20 text-accent">{p.tag}</span>
                  )}
                </div>
                <p className="text-steel-lighter text-xs leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                  <span className="font-extrabold text-accent text-base">{p.price}</span>
                  <Link href="/contact" className="text-xs font-semibold text-primary hover:text-accent transition-colors">
                    Enquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Contact prompt */}
          <div className="mt-14 rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
            <p className="text-white font-bold text-lg mb-2">Looking for a specific model?</p>
            <p className="text-steel-lighter mb-6">Call us or visit the shop — we can source most accessories within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+254799554997" className="btn-accent py-3 px-6 text-sm">📞 Call Now</a>
              <Link href="/contact" className="btn-outline py-3 px-6 text-sm">Send Enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
