import ServicesSection from '../components/ServicesSection'
import { FaCheckCircle } from 'react-icons/fa'

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Repair Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional, reliable, and affordable repair solutions for all your devices
          </p>
        </div>
      </section>
      
      <ServicesSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary mt-1" />
                  <span>Same-day repairs available</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary mt-1" />
                  <span>Warranty on all repairs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary mt-1" />
                  <span>Certified technicians</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary mt-1" />
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary mt-1" />
                  <span>Free diagnostic check</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">What We Repair</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Apple iPhone & iPad</li>
                <li>• Samsung Galaxy & Note</li>
                <li>• Google Pixel & OnePlus</li>
                <li>• Dell, HP, Lenovo Laptops</li>
                <li>• MacBook & iMac</li>
                <li>• PlayStation, Xbox, Switch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
