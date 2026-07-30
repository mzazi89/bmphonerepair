import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaHome, FaEnvelope } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-dark-800 border-b border-dark-500">
        <div className="container mx-auto text-center">
          <span className="badge">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-steel-lighter max-w-xl mx-auto text-lg">
            Fill in the form below and we&apos;ll open WhatsApp with your details — Ben will reply fast!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-white mb-5">Reach Us Directly</h2>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/15 border border-accent/30 rounded-lg flex items-center justify-center shrink-0">
                    <FaPhone className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Call Us</h3>
                    <a href="tel:+254799554997" className="text-steel-lighter text-sm hover:text-accent transition-colors">
                      +254 799 554997
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/15 border border-green-500/30 rounded-lg flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/254799554997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-steel-lighter text-sm hover:text-green-400 transition-colors"
                    >
                      +254 799 554997
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/15 border border-primary/30 rounded-lg flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:magubenz@gmail.com"
                      className="text-steel-lighter text-sm hover:text-accent transition-colors break-all"
                    >
                      magubenz@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/15 border border-primary/30 rounded-lg flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Our Location</h3>
                    <p className="text-steel-lighter text-sm">
                      Limuru Town<br />
                      Kiambu County, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/15 border border-accent/30 rounded-lg flex items-center justify-center shrink-0">
                    <FaClock className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Working Hours</h3>
                    <p className="text-steel-lighter text-sm">Mon – Sat: 8:00 AM – 7:00 PM</p>
                    <p className="text-steel-lighter text-sm">Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="card border-accent/30 bg-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/20 border border-accent/40 rounded-lg flex items-center justify-center shrink-0">
                    <FaHome className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">House Visit</h3>
                    <p className="text-steel-lighter text-sm">
                      We offer house-to-house repair across Limuru and nearby areas.
                      Check the box in the form to request a visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-2">Send a Repair Request</h2>
                <p className="text-steel-lighter text-sm mb-8">
                  Fill in your details below. When you submit, WhatsApp opens with your info
                  pre-filled so Ben can reply to you immediately.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-10 pb-20">
        <div className="container mx-auto">
          <div className="bg-dark-700 border border-dark-500 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-accent text-4xl mx-auto mb-3" />
              <p className="text-white font-semibold">BM Phone Repair &amp; Accessories</p>
              <p className="text-steel-lighter text-sm">Limuru Town, Kiambu County, Kenya</p>
              <a
                href="https://maps.google.com/?q=Limuru+Town,+Kiambu+County,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-primary hover:text-accent transition-colors font-medium"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
