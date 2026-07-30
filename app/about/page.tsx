import { FaUsers, FaTools, FaShieldAlt, FaClock } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About BM Repair</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for professional phone and electronics repair services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded with a passion for technology and a commitment to quality service, 
              BM Phone & Electronics Repair has been serving the community with 
              professional repair solutions for electronic devices.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of certified technicians brings years of experience in repairing 
              everything from smartphones to gaming consoles, ensuring your devices are 
              in capable hands.
            </p>
            <p className="text-gray-700">
              We believe in transparency, quality parts, and customer satisfaction. 
              Every repair comes with a warranty and our guarantee of excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <FaUsers className="text-primary text-4xl mx-auto mb-2" />
              <h3 className="font-bold">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="card text-center">
              <FaTools className="text-primary text-4xl mx-auto mb-2" />
              <h3 className="font-bold">1000+</h3>
              <p className="text-gray-600">Devices Repaired</p>
            </div>
            <div className="card text-center">
              <FaShieldAlt className="text-primary text-4xl mx-auto mb-2" />
              <h3 className="font-bold">12+</h3>
              <p className="text-gray-600">Months Warranty</p>
            </div>
            <div className="card text-center">
              <FaClock className="text-primary text-4xl mx-auto mb-2" />
              <h3 className="font-bold">24hr</h3>
              <p className="text-gray-600">Quick Turnaround</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Our Commitment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Quality Parts</h4>
              <p className="text-gray-600 text-sm">
                We use only high-quality, tested parts for all repairs
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Expert Technicians</h4>
              <p className="text-gray-600 text-sm">
                Certified professionals with extensive experience
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Satisfaction Guaranteed</h4>
              <p className="text-gray-600 text-sm">
                We stand behind every repair we perform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
