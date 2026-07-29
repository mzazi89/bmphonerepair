'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            BM Phone & <br />
            <span className="text-yellow-300">Electronics Repair</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Professional repairs for all your devices. Fast, reliable, and affordable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="btn-primary bg-white text-primary hover:bg-gray-100">
              View Services
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-200">Devices Fixed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-200">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm text-gray-200">Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
