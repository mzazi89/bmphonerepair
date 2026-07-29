import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BM Repair</h3>
            <p className="text-gray-400 mb-4">
              Professional phone and electronics repair services with quality guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">iPhone Repair</li>
              <li className="text-gray-400">Samsung Repair</li>
              <li className="text-gray-400">Laptop Repair</li>
              <li className="text-gray-400">Tablet Repair</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaPhone className="mt-1 text-primary" />
                <span>{process.env.NEXT_PUBLIC_PHONE}</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaEnvelope className="mt-1 text-primary" />
                <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarker className="mt-1 text-primary" />
                <span>{process.env.NEXT_PUBLIC_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} BM Phone & Electronics Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
