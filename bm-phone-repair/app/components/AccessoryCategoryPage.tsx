import Link from 'next/link'
import { getAccessoriesByCategory, Accessory } from '../lib/db'

function PriceTag({ item }: { item: Accessory }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {item.old_price && (
        <span className="text-sm text-gray-500 line-through">
          KSh {item.old_price.toLocaleString()}
        </span>
      )}
      <span className="text-base font-bold text-yellow-400">
        KSh {item.current_price.toLocaleString()}
      </span>
      {item.old_price && item.old_price > item.current_price && (
        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400">
          -{Math.round((1 - item.current_price / item.old_price) * 100)}% OFF
        </span>
      )}
    </div>
  )
}

interface StaticItem {
  name: string
  price: string
  tag: string | null
  desc: string
}

interface Props {
  title: string
  icon: string
  category: string
  accentColor: string
  accentBg: string
  description: string
  staticFallback?: StaticItem[]
}

export default async function AccessoryCategoryPage({
  title,
  icon,
  category,
  accentColor,
  accentBg,
  description,
  staticFallback = [],
}: Props) {
  let dbItems: Accessory[] = []
  try {
    dbItems = await getAccessoriesByCategory(category)
  } catch {
    // silently fall back to static data if DB is unavailable
  }

  const hasDb = dbItems.length > 0

  return (
    <div className="min-h-screen bg-dark-800">
      {/* Header */}
      <section className="bg-black border-b border-white/10 py-14">
        <div className="container mx-auto">
          <Link
            href="/accessories"
            className="text-sm text-steel-lighter hover:text-accent transition-colors mb-6 inline-flex items-center gap-2"
          >
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
          {hasDb ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dbItems.map((item) => (
                <div
                  key={item.id}
                  className="card group hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div
                    className="rounded-xl mb-4 overflow-hidden flex items-center justify-center"
                    style={{
                      height: 160,
                      backgroundColor: accentBg,
                      border: `1px solid ${accentColor}25`,
                    }}
                  >
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <span className="text-5xl">{icon}</span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white text-sm leading-snug">{item.name}</h3>
                    {!item.in_stock && (
                      <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">
                        Out of stock
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-steel-lighter text-xs leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                  )}
                  <div className="mt-auto pt-3 border-t border-white/10">
                    <PriceTag item={item} />
                  </div>
                </div>
              ))}
            </div>
          ) : staticFallback.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {staticFallback.map((p) => (
                <div
                  key={p.name}
                  className="card group hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <div
                    className="rounded-xl mb-4 h-36 flex items-center justify-center text-5xl"
                    style={{ backgroundColor: accentBg, border: `1px solid ${accentColor}25` }}
                  >
                    {icon}
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white text-sm leading-snug">{p.name}</h3>
                    {p.tag && (
                      <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-accent/20 text-accent">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-steel-lighter text-xs leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                    <span className="font-extrabold text-lg" style={{ color: accentColor }}>
                      {p.price}
                    </span>
                    <span className="text-xs text-steel-lighter">Call to order</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <span className="text-6xl">{icon}</span>
              <p className="text-gray-400 mt-4">No items listed yet — check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
