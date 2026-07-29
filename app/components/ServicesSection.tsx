'use client'

import { motion } from 'framer-motion'
import { FaMobile, FaLaptop, FaTablet, FaGamepad, FaDatabase, FaTools } from 'react-icons/fa'

const services = [
  {
    icon: FaMobile,
    name: 'iPhone Repair',
    description: 'Screen replacement, battery replacement, charging port repair, and more.',
    price: 'From $79'
  },
  {
    icon: FaMobile,
    name: 'Samsung Repair',
    description: 'Full service for all Samsung Galaxy devices including folding phones.',
    price: 'From $89'
  },
  {
    icon: FaTablet,
    name: 'Tablet Repair',
    description: 'iPad and Android tablet fixes for screens, batteries, and software.',
    price: 'From $99'
  },
  {
    icon: FaLaptop,
    name: 'Laptop Repair',
    description: 'Hardware upgrades, screen replacement, keyboard repair, and virus removal.',
    price: 'From $129'
  },
  {
    icon: FaGamepad,
    name: 'Console Repair',
    description: 'PS5, Xbox Series X/S, Nintendo Switch repair and maintenance.',
    price: 'From $119'
  },
  {
    icon: FaDatabase,
    name: 'Data Recovery',
    description: 'Recover lost photos, documents, and files from damaged devices.',
    price: 'From $149'
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional repair services for all your electronic devices with quality parts and warranty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:transform hover:-translate-y-2"
            >
              <div className="text-primary text-4xl mb-4">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold">{service.price}</span>
                <button className="text-primary hover:text-primary-dark font-semibold text-sm">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
