'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaWrench } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-dark-800/95 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-dark-500'
        : 'bg-dark-800 border-b border-dark-600'
    }`}>
      {/* Top bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-1.5 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <span className="text-steel-lighter">
            📍 Limuru Town, Kiambu County, Kenya
          </span>
          <a href="tel:+254700000000" className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors">
            <FaPhone className="text-xs" />
            <span className="font-medium">Call / WhatsApp Us</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <FaWrench className="text-white text-lg" />
            </div>
            <div className="leading-tight">
              <span className="text-xl font-extrabold text-white">BM</span>
              <span className="text-xl font-light text-accent"> Repair</span>
              <div className="text-xs text-steel-lighter font-medium tracking-wide">Phone & Accessories</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-steel-lighter hover:text-accent transition-colors duration-200 font-medium text-sm tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-accent text-sm py-2 px-4"
            >
              Book Repair
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl text-steel-lighter hover:text-accent transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-dark-500 bg-dark-700 rounded-b-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-steel-lighter hover:text-accent hover:bg-dark-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-accent block text-center text-sm py-2">
                Book a Repair
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
