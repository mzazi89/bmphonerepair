'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

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
    { href: '/accessories', label: 'Accessories' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-black/97 backdrop-blur-md shadow-2xl shadow-black/70 border-b border-dark-500'
        : 'bg-black border-b border-dark-600'
    }`}>
      {/* Top bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-1.5 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <span className="text-steel-lighter">
            📍 Limuru Town, Kiambu County, Kenya
          </span>
          <a href="tel:+254799554997" className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors">
            <FaPhone className="text-xs" />
            <span className="font-medium">+254 799 554997</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo — no background needed since image has transparent bg */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="BM Phone Repair & Accessories"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="text-base font-extrabold text-white leading-none">BM Phone Repair</div>
              <div className="text-xs text-accent font-medium tracking-wide">& Accessories</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
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
