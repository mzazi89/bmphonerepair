'use client'

import { motion } from 'framer-motion'
import { FaMobile, FaLaptop, FaTablet, FaBatteryFull, FaWifi, FaTools } from 'react-icons/fa'

const services = [
  {
    icon: FaMobile,
    name: 'Screen Replacement',
    description: 'Cracked or unresponsive screen? We replace screens for all brands — iPhone, Samsung, Tecno, Infinix, and more.',
    note: 'Price varies by device',
  },
  {
    icon: FaBatteryFull,
    name: 'Battery Replacement',
    description: 'Restore your phone\'s battery life. We use quality batteries for all major smartphone brands.',
    note: 'Price varies by model',
  },
  {
    icon: FaTools,
    name: 'Charging Port Repair',
    description: 'Loose or faulty charging port repaired professionally. Your device will charge like new again.',
    note: 'Negotiable price',
  },
  {
    icon: FaTablet,
    name: 'Software & Flashing',
    description: 'Software issues, phone hanging, bootloop, or factory reset — we handle all software problems.',
    note: 'Negotiable price',
  },
  {
    icon: FaWifi,
    name: 'Network & Mic Repair',
    description: 'No signal, network issues, or microphone problems? Our technicians diagnose and fix hardware faults.',
    note: 'Price varies by issue',
  },
  {
    icon: FaLaptop,
    name: 'Accessories & Upgrades',
    description: 'Phone cases, screen protectors, chargers, earphones, and more accessories at great prices.',
    note: 'Various prices',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-dark-800" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge">What We Fix</span>
          <h2 className="section-title">Our Repair Services</h2>
          <p className="section-subtitle">
            All prices are negotiable and vary depending on the device model. We ensure quality repairs 
            at fair, transparent prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card group cursor-default"
            >
              <div className="w-12 h-12 bg-primary/15 border border-primary/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <service.icon className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-steel-lighter text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-dark-400">
                <span className="text-accent font-semibold text-sm">{service.note}</span>
                <span className="text-steel text-xs bg-dark-500 rounded-full px-3 py-1">Contact for quote</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/20 via-dark-600 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Can&apos;t Visit Our Shop?</h3>
          <p className="text-steel-lighter mb-6 max-w-xl mx-auto">
            We offer house-to-house repair services across Limuru and surrounding areas. 
            Just request and we come to you.
          </p>
          <a href="/contact" className="btn-accent inline-block">
            Request a Visit
          </a>
        </motion.div>
      </div>
    </section>
  )
}
