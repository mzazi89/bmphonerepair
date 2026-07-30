import { FaMobile, FaLaptop, FaBatteryFull, FaWifi, FaTools, FaCheckCircle, FaHome } from 'react-icons/fa'
import Link from 'next/link'

const services = [
  {
    icon: FaMobile,
    name: 'Screen Replacement',
    description: 'We replace cracked, shattered, or unresponsive screens for all smartphone brands including iPhone, Samsung, Tecno, Infinix, Xiaomi, Huawei, and Nokia.',
    details: ['Original quality screens', 'All brands supported', 'Same-day service available'],
  },
  {
    icon: FaBatteryFull,
    name: 'Battery Replacement',
    description: "Restore your phone's battery life with a genuine replacement. We source quality batteries that bring your device back to full performance.",
    details: ['Quality replacement batteries', 'All major brands', 'Quick installation'],
  },
  {
    icon: FaTools,
    name: 'Charging Port Repair',
    description: 'Loose, damaged, or blocked charging port? We clean, repair, or replace charging ports to get your phone charging normally again.',
    details: ['Port cleaning & repair', 'Port replacement if needed', 'All connector types'],
  },
  {
    icon: FaMobile,
    name: 'Software & Flashing',
    description: 'Phone hanging, bootloop, forgotten PIN, or software corruption? We flash firmware and resolve software issues for most Android and iPhone devices.',
    details: ['Firmware flashing', 'Factory reset & setup', 'PIN/pattern unlock'],
  },
  {
    icon: FaWifi,
    name: 'Network & Speaker Repair',
    description: 'No signal, weak network, microphone not working, or speaker issues — our technicians diagnose and fix hardware faults on the motherboard level.',
    details: ['Network IC repair', 'Speaker & mic replacement', 'Hardware diagnostics'],
  },
  {
    icon: FaLaptop,
    name: 'Accessories & Parts',
    description: 'We stock a wide range of quality phone accessories including cases, screen protectors, chargers, earphones, power banks, and USB cables.',
    details: ['Original & compatible parts', 'Affordable prices', 'Wide range of brands'],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/95" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="badge">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Repair Services</h1>
          <p className="text-steel-lighter max-w-2xl mx-auto text-lg">
            All prices are negotiable and vary with the type of device. Contact us for a free quote before any repair.
          </p>
        </div>
      </section>

      {/* Pricing notice */}
      <div className="bg-primary/10 border-b border-primary/20 py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 text-steel-lighter">
            <FaCheckCircle className="text-accent" />
            <span>Prices vary by device model — contact us for a free quote</span>
          </div>
          <div className="flex items-center gap-2 text-steel-lighter">
            <FaHome className="text-primary" />
            <span>House-to-house repair available on request across Limuru</span>
          </div>
          <Link href="/contact" className="btn-accent text-sm py-2 px-5">
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="card group">
                <div className="w-14 h-14 bg-primary/15 border border-primary/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                  <service.icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-steel-lighter text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 border-t border-dark-400 pt-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-steel-lighter">
                      <FaCheckCircle className="text-accent text-xs shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-dark-400 flex items-center justify-between">
                  <span className="text-accent text-sm font-semibold">Price negotiable</span>
                  <Link href="/contact" className="text-xs text-primary hover:text-accent transition-colors font-medium">
                    Get Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House visit CTA */}
      <section className="py-16 bg-dark-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Us to Come to You?</h2>
          <p className="text-steel-lighter max-w-xl mx-auto mb-8">
            We offer convenient house-to-house repair across Limuru Town and surrounding areas.
            Just request a visit when you book your repair.
          </p>
          <Link href="/contact" className="btn-accent text-lg px-10 py-4">
            Book a House Visit
          </Link>
        </div>
      </section>
    </div>
  )
}
