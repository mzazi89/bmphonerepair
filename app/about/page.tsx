import { FaUsers, FaTools, FaShieldAlt, FaClock, FaHome, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/95" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="badge">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About BM Phone Repair</h1>
          <p className="text-steel-lighter max-w-2xl mx-auto text-lg">
            Serving Limuru and surrounding areas with honest, affordable, and professional phone repair services.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge">Who We Are</span>
              <h2 className="text-3xl font-bold text-white mb-6">Rooted in Limuru Town</h2>
              <p className="text-steel-lighter mb-5 leading-relaxed">
                BM Phone Repair &amp; Accessories is your local phone repair shop based right here in
                <strong className="text-white"> Limuru Town, Kiambu County</strong>. We started with a
                simple mission: to provide honest, high-quality phone repairs that people in our community
                can actually afford.
              </p>
              <p className="text-steel-lighter mb-5 leading-relaxed">
                We repair all major smartphone brands — iPhone, Samsung, Tecno, Infinix, Xiaomi,
                Huawei, Nokia, and more. Whether it&apos;s a cracked screen, a faulty battery, or a
                charging port issue, our experienced technicians handle it all.
              </p>
              <p className="text-steel-lighter leading-relaxed">
                Our prices are <strong className="text-accent">negotiable and vary with the type of device</strong>.
                We believe in transparency — you&apos;ll always know the cost before we start any repair.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: FaUsers, value: '500+', label: 'Happy Customers' },
                { icon: FaTools, value: '1,000+', label: 'Devices Repaired' },
                { icon: FaShieldAlt, value: '100%', label: 'Quality Guarantee' },
                { icon: FaClock, value: 'Same Day', label: 'Most Repairs' },
              ].map((stat) => (
                <div key={stat.label} className="card text-center">
                  <div className="w-12 h-12 bg-primary/15 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-primary text-xl" />
                  </div>
                  <div className="text-2xl font-extrabold text-accent mb-1">{stat.value}</div>
                  <div className="text-steel-lighter text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* House to House Service */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge">Unique Service</span>
              <h2 className="text-3xl font-bold text-white mb-4">House-to-House Repair Service</h2>
              <p className="text-steel-lighter text-lg">
                Can&apos;t make it to our shop? No problem. We come to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <FaHome className="text-accent text-3xl mb-4" />
                <h3 className="text-white font-bold text-lg mb-3">We Come to Your Location</h3>
                <p className="text-steel-lighter text-sm leading-relaxed">
                  If you are unable to come to our shop — whether due to a busy schedule, distance,
                  or any other reason — simply request a house visit and our technician will come
                  to your home or workplace.
                </p>
              </div>

              <div className="card">
                <FaMapMarkerAlt className="text-primary text-3xl mb-4" />
                <h3 className="text-white font-bold text-lg mb-3">Coverage Area</h3>
                <p className="text-steel-lighter text-sm leading-relaxed">
                  We serve Limuru Town and surrounding areas including Tigoni, Uplands,
                  Kinoo, and nearby estates. Call or WhatsApp us on <strong className="text-accent">+254 799 554997</strong> to
                  confirm if your location is within our coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge">Transparent Pricing</span>
              <h2 className="text-3xl font-bold text-white mb-4">Fair &amp; Negotiable Prices</h2>
              <p className="text-steel-lighter">
                We believe everyone deserves quality phone repair at a fair price.
              </p>
            </div>

            <div className="bg-dark-600 border border-dark-400 rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-bold text-lg mb-5">How Our Pricing Works</h3>
                  <ul className="space-y-4">
                    {[
                      'Price varies depending on the device brand and model',
                      'You get a quote before any work begins — no surprises',
                      'Prices are negotiable; we work within your budget',
                      'Quality spare parts used for all repairs',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-steel-lighter text-sm">
                        <FaCheckCircle className="text-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-5">Why Choose Us</h3>
                  <ul className="space-y-4">
                    {[
                      'Located in the heart of Limuru Town',
                      'Experienced and trustworthy technicians',
                      'House-to-house repair on request',
                      'Fast turnaround — most repairs done same day',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-steel-lighter text-sm">
                        <FaCheckCircle className="text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
