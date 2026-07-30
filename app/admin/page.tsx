'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const accessories = [
  { slug: 'earphones',         name: 'Earphones & Headphones', icon: '🎧', count: '20+' },
  { slug: 'chargers',          name: 'Chargers & Cables',       icon: '⚡', count: '30+' },
  { slug: 'woofers',           name: 'Speakers & Woofers',      icon: '🔊', count: '15+' },
  { slug: 'cases',             name: 'Phone Cases & Covers',    icon: '📱', count: '50+' },
  { slug: 'screen-protectors', name: 'Screen Protectors',       icon: '🛡️', count: '40+' },
  { slug: 'power-banks',       name: 'Power Banks',             icon: '🔋', count: '12+' },
  { slug: 'memory-cards',      name: 'Memory Cards & Storage',  icon: '💾', count: '18+' },
  { slug: 'bluetooth',         name: 'Bluetooth Devices',       icon: '📡', count: '25+' },
]

const services = [
  { name: 'Screen Replacement',      icon: '📱' },
  { name: 'Battery Replacement',     icon: '🔋' },
  { name: 'Charging Port Repair',    icon: '⚡' },
  { name: 'Software & Flashing',     icon: '💻' },
  { name: 'Network & Speaker Repair',icon: '📡' },
  { name: 'Accessories & Parts',     icon: '🛒' },
]

const stats = [
  { label: 'Accessory Categories', value: '8',    icon: '📦', color: '#3b82f6' },
  { label: 'Total Products Listed', value: '210+', icon: '🛒', color: '#10b981' },
  { label: 'Repair Services',       value: '6',    icon: '🔧', color: '#f59e0b' },
  { label: 'Site Pages',            value: '14',   icon: '📄', color: '#8b5cf6' },
]

export default function AdminDashboard() {
  const [loggingOut, setLoggingOut] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setLoggingOut(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm font-extrabold text-white">
              BM
            </div>
            <div>
              <span className="font-extrabold text-white text-sm">Admin Panel</span>
              <span className="ml-2 text-xs text-slate-500">BM Phone Repair</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 border border-white/10 rounded-lg px-3 py-1.5"
            >
              🌐 View Site
            </a>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="text-xs font-semibold text-red-400 hover:text-red-300 border border-red-500/20 hover:border-red-500/40 rounded-lg px-3 py-1.5 transition-all"
            >
              {loggingOut ? 'Signing out…' : '🔓 Logout'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-extrabold text-white mb-1">Dashboard</h1>
          <p className="text-sm text-slate-400">Manage your BM Phone Repair & Accessories website.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-[#0f1629] p-5"
              style={{ boxShadow: `inset 0 0 30px ${s.color}08` }}
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-extrabold text-white" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Accessories */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Accessories Categories</h2>
            <Link
              href="/accessories"
              target="_blank"
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              View on site →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {accessories.map((cat) => (
              <div
                key={cat.slug}
                className="rounded-xl border border-white/10 bg-[#0f1629] p-4 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{cat.name}</p>
                    <p className="text-slate-500 text-xs">{cat.count} items</p>
                  </div>
                </div>
                <Link
                  href={`/accessories/${cat.slug}`}
                  target="_blank"
                  className="block text-center text-xs font-semibold py-1.5 rounded-lg bg-white/5 hover:bg-blue-600/20 text-slate-400 hover:text-blue-300 border border-white/10 hover:border-blue-500/30 transition-all"
                >
                  View Page →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            💡 To update product listings, edit the corresponding page file in <code className="bg-white/5 px-1 rounded">app/accessories/[category]/page.tsx</code> via GitHub or connect a database.
          </p>
        </section>

        {/* Services */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Repair Services</h2>
            <Link
              href="/services"
              target="_blank"
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              View on site →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {services.map((svc) => (
              <div key={svc.name} className="rounded-xl border border-white/10 bg-[#0f1629] p-4 flex items-center gap-3">
                <span className="text-xl">{svc.icon}</span>
                <span className="text-sm text-white font-medium">{svc.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Home Page',        href: '/',            icon: '🏠' },
              { label: 'Services Page',    href: '/services',    icon: '🔧' },
              { label: 'Accessories',      href: '/accessories', icon: '📦' },
              { label: 'Contact Page',     href: '/contact',     icon: '📞' },
              { label: 'About Page',       href: '/about',       icon: 'ℹ️' },
              { label: 'GitHub Repo',      href: 'https://github.com/mzazi89/bmphonerepair', icon: '⚙️' },
              { label: 'Vercel Dashboard', href: 'https://vercel.com',  icon: '🚀' },
              { label: 'Vercel Env Vars',  href: 'https://vercel.com/dashboard', icon: '🔑' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-[#0f1629] p-4 flex items-center gap-2 hover:border-blue-500/30 hover:bg-blue-600/5 transition-all group"
              >
                <span className="text-lg">{l.icon}</span>
                <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">{l.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact & Business Info */}
        <section>
          <h2 className="text-lg font-bold text-white mb-4">Business Info</h2>
          <div className="rounded-2xl border border-white/10 bg-[#0f1629] p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: '📍 Location',     value: 'Limuru Town, Kiambu County, Kenya' },
                { label: '📞 Phone',        value: '+254 799 554997' },
                { label: '📧 Email',        value: 'info@bmrepair.com' },
                { label: '🕐 Hours',        value: 'Mon–Sat: 8am – 7pm' },
                { label: '🚗 Service',      value: 'House-to-house repairs available' },
                { label: '💰 Pricing',      value: 'Negotiable — contact for quote' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold text-slate-500 mb-1">{item.label}</p>
                  <p className="text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-white/10">
              To update business info, edit <code className="bg-white/5 px-1 rounded">app/components/Footer.tsx</code> and <code className="bg-white/5 px-1 rounded">app/components/Navbar.tsx</code>.
            </p>
          </div>
        </section>

        {/* Env Vars reminder */}
        <section>
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <p className="text-yellow-400 font-bold text-sm mb-2">⚙️ Required Vercel Environment Variables</p>
            <p className="text-slate-400 text-xs mb-3">Make sure these are set in your Vercel project settings under <strong>Settings → Environment Variables</strong>:</p>
            <div className="space-y-1.5">
              {[
                { key: 'ADMIN_USERNAME',    hint: 'Your admin login username' },
                { key: 'ADMIN_PASSWORD',    hint: 'Your admin login password' },
                { key: 'ADMIN_JWT_SECRET',  hint: 'Any long random string (e.g. 64 random characters)' },
                { key: 'EMAIL_HOST',        hint: 'SMTP host, e.g. smtp.gmail.com' },
                { key: 'EMAIL_USER',        hint: 'Your Gmail address' },
                { key: 'EMAIL_PASS',        hint: 'Gmail App Password (not your main password)' },
                { key: 'EMAIL_TO',          hint: 'Where contact form emails go' },
              ].map((v) => (
                <div key={v.key} className="flex items-center gap-3 text-xs">
                  <code className="bg-black/40 border border-white/10 rounded px-2 py-1 text-yellow-300 font-mono w-48 flex-shrink-0">{v.key}</code>
                  <span className="text-slate-400">{v.hint}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
