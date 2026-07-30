'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaWrench, FaClock } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-dark-500">
      {/* Main footer */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                <FaWrench className="text-white text-lg" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">BM</span>
                <span className="text-xl font-light text-accent"> Repair</span>
              </div>
            </div>
            <p className="text-steel-lighter text-sm leading-relaxed mb-6">
              Your trusted phone repair and accessories shop in Limuru Town. 
              Professional, affordable, and reliable.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-500 border border-dark-400 rounded-lg flex items-center justify-center text-steel-lighter hover:text-accent hover:border-accent transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-500 border border-dark-400 rounded-lg flex items-center justify-center text-steel-lighter hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-steel-lighter hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3 text-steel-lighter text-sm">
              <li>Screen Replacement</li>
              <li>Battery Replacement</li>
              <li>Charging Port Repair</li>
              <li>Software / Flashing</li>
              <li>Accessories</li>
              <li>House-to-House Repair</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-steel-lighter">
                <FaMapMarkerAlt className="text-accent mt-0.5 shrink-0" />
                <span>Limuru Town, Kiambu County, Kenya</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-steel-lighter">
                <FaPhone className="text-accent mt-0.5 shrink-0" />
                <a href="tel:+254700000000" className="hover:text-accent transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-steel-lighter">
                <FaWhatsapp className="text-accent mt-0.5 shrink-0" />
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-steel-lighter">
                <FaClock className="text-primary mt-0.5 shrink-0" />
                <div>
                  <div>Mon–Sat: 8AM – 7PM</div>
                  <div>Sun: 10AM – 4PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-600 py-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-steel text-sm">
          <p>© {currentYear} BM Phone Repair &amp; Accessories. All rights reserved.</p>
          <p className="text-steel-lighter">Limuru Town, Kenya</p>
        </div>
      </div>
    </footer>
  )
}
