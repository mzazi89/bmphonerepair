export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          BM Phone & Electronics Repair
        </h1>
        <p className="text-xl mb-8">
          Professional repairs for all your devices
        </p>
        <div className="space-x-4">
          <a href="/services" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
            Our Services
          </a>
          <a href="/contact" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
