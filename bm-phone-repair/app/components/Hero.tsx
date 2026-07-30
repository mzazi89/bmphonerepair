'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaChevronDown, FaHome } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1920&q=80')",
        }}
      />
      {/* Very dark gradient overlay — almost opaque */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/99 via-black/93 to-black/78" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge">Limuru Town, Kenya</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6"
          >
            Your Phone,{' '}
            <span className="text-primary">Our Expertise.</span>
            <br />
            <span className="text-accent">Fixed Fast.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-steel-lighter mb-8 leading-relaxed max-w-2xl"
          >
            BM Phone Repair &amp; Accessories — Limuru&apos;s trusted repair shop. We handle all brands
            with precision. Can&apos;t come to us? We come to you.
          </motion.p>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <div className="flex items-center gap-2 bg-black/70 border border-dark-400 rounded-full px-4 py-2 text-sm text-steel-lighter">
              <FaMapMarkerAlt className="text-accent" />
              <span>Limuru Town</span>
            </div>
            <div className="flex items-center gap-2 bg-black/70 border border-dark-400 rounded-full px-4 py-2 text-sm text-steel-lighter">
              <FaHome className="text-primary" />
              <span>House-to-House Repairs Available</span>
            </div>
            <div className="flex items-center gap-2 bg-black/70 border border-dark-400 rounded-full px-4 py-2 text-sm text-steel-lighter">
              <FaPhone className="text-accent" />
              <span>Negotiable Prices</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-accent text-center text-lg py-4 px-8">
              Book a Repair
            </Link>
            <Link href="/services" className="btn-outline text-center text-lg py-4 px-8">
              View Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md border-t border-dark-500 pt-8"
          >
            {[
              { value: '500+', label: 'Devices Fixed' },
              { value: '98%', label: 'Satisfaction' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-accent">{stat.value}</div>
                <div className="text-xs text-steel-lighter mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel-lighter animate-bounce">
        <FaChevronDown />
      </div>
    </section>
  )
}
