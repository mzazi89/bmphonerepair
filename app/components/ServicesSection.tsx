const services = [
  { name: 'iPhone Repair', description: 'Screen, battery, and more' },
  { name: 'Samsung Repair', description: 'Full service for Galaxy devices' },
  { name: 'Tablet Repair', description: 'iPad and Android tablet fixes' },
  { name: 'Laptop Repair', description: 'Hardware and software solutions' },
  { name: 'Console Repair', description: 'PS5, Xbox, Nintendo Switch' },
  { name: 'Data Recovery', description: 'Recover lost data' },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
