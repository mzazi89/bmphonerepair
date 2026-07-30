'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaHome, FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Gradient backdrop — no external image */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-800 to-dark-700" />

      {/* Accent glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-primary/6 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

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
            {[
              { icon: <FaMapMarkerAlt className="text-accent" />, label: 'Limuru Town' },
              { icon: <FaHome className="text-primary" />, label: 'House-to-House Repairs Available' },
              { icon: <FaPhone className="text-accent" />, label: 'Negotiable Prices' },
            ].map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-steel-lighter backdrop-blur-sm"
              >
                {pill.icon}
                <span>{pill.label}</span>
              </div>
            ))}
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
            <Link href="/accessories" className="btn-outline text-center text-lg py-4 px-8">
              Shop Accessories
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md border-t border-white/10 pt-8"
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
