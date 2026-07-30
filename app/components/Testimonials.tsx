'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'James Kamau',
    role: 'Business Owner, Limuru',
    content: 'BM Repair fixed my Samsung screen the same day. Very professional and the price was fair. I highly recommend them to everyone in Limuru!',
    rating: 5,
  },
  {
    name: 'Grace Wanjiku',
    role: 'Teacher, Limuru',
    content: 'My phone had a battery problem and they came to my house to fix it. The house-to-house service is incredibly convenient. Excellent work!',
    rating: 5,
  },
  {
    name: 'Peter Mwangi',
    role: 'Student, Limuru',
    content: 'Affordable prices and great service. They replaced my cracked screen and it looks brand new. Very honest people, no hidden charges.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge">What Customers Say</span>
          <h2 className="section-title">Trusted by Limuru Locals</h2>
          <p className="section-subtitle">
            Real experiences from our satisfied customers across Limuru and surrounding areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-dark relative"
            >
              <FaQuoteLeft className="text-primary/30 text-4xl mb-4" />
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-accent text-sm" />
                ))}
              </div>
              <p className="text-steel-lighter leading-relaxed mb-6 text-sm">{t.content}</p>
              <div className="flex items-center gap-3 border-t border-dark-500 pt-4">
                <div className="w-10 h-10 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-steel text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
