import ContactForm from '../components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarker, FaClock } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need repair services? Get in touch with us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card">
              <div className="flex items-start space-x-4">
                <FaPhone className="text-primary text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">{process.env.NEXT_PUBLIC_PHONE}</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-primary text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">{process.env.NEXT_PUBLIC_EMAIL}</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start space-x-4">
                <FaMapMarker className="text-primary text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">{process.env.NEXT_PUBLIC_ADDRESS}</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start space-x-4">
                <FaClock className="text-primary text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9AM - 7PM</p>
                  <p className="text-gray-600">Sat: 10AM - 5PM</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
