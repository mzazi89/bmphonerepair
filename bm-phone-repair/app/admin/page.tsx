'use client'

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

interface Accessory {
  id: number
  name: string
  category: string
  old_price: number | null
  current_price: number
  image: string | null
  in_stock: boolean
  description: string | null
  created_at: string
}

const CATEGORIES = [
  { value: 'earphones', label: 'Earphones & Headphones' },
  { value: 'chargers', label: 'Chargers & Cables' },
  { value: 'cases', label: 'Phone Cases & Covers' },
  { value: 'woofers', label: 'Speakers & Woofers' },
  { value: 'screen-protectors', label: 'Screen Protectors' },
  { value: 'power-banks', label: 'Power Banks' },
  { value: 'memory-cards', label: 'Memory Cards & Storage' },
  { value: 'bluetooth', label: 'Bluetooth Devices' },
]

const CATEGORY_ICONS: Record<string, string> = {
  earphones: '🎧',
  chargers: '⚡',
  cases: '📱',
  woofers: '🔊',
  'screen-protectors': '🛡️',
  'power-banks': '🔋',
  'memory-cards': '💾',
  bluetooth: '📡',
}

function formatKsh(n: number) {
  return `KSh ${n.toLocaleString()}`
}

const emptyForm = {
  name: '',
  category: 'earphones',
  old_price: '',
  current_price: '',
  description: '',
  in_stock: true,
  image: '',
}

export default function AdminDashboard() {
  const router = useRouter()
  const [items, setItems] = useState<Accessory[]>([])
  const [loading, setLoading] = useState(true)
  const [filterCat, setFilterCat] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [editItem, setEditItem] = useState<Accessory | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    loadItems()
  }, [])

  async function loadItems() {
    setLoading(true)
    try {
      const res = await fetch('/api/accessories')
      const data = await res.json()
      setItems(data.items || [])
    } catch {
      setError('Failed to load items')
    } finally {
      setLoading(false)
    }
  }

  function openAdd() {
    setEditItem(null)
    setForm(emptyForm)
    setImagePreview(null)
    setError('')
    setSuccess('')
    setShowForm(true)
  }

  function openEdit(item: Accessory) {
    setEditItem(item)
    setForm({
      name: item.name,
      category: item.category,
      old_price: item.old_price ? String(item.old_price) : '',
      current_price: String(item.current_price),
      description: item.description || '',
      in_stock: item.in_stock,
      image: item.image || '',
    })
    setImagePreview(item.image || null)
    setError('')
    setSuccess('')
    setShowForm(true)
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) {
      setError('Image must be smaller than 2 MB')
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => {
      const b64 = ev.target?.result as string
      setImagePreview(b64)
      setForm((f) => ({ ...f, image: b64 }))
    }
    reader.readAsDataURL(file)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSaving(true)

    const payload = {
      name: form.name.trim(),
      category: form.category,
      old_price: form.old_price ? Number(form.old_price) : null,
      current_price: Number(form.current_price),
      description: form.description.trim() || null,
      in_stock: form.in_stock,
      image: form.image || null,
    }

    try {
      const res = editItem
        ? await fetch(`/api/accessories/${editItem.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
        : await fetch('/api/accessories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })

      if (!res.ok) {
        const d = await res.json()
        setError(d.error || 'Save failed')
        return
      }

      setSuccess(editItem ? 'Item updated!' : 'Item added!')
      setShowForm(false)
      await loadItems()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`/api/accessories/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setSuccess('Item deleted.')
        setDeleteConfirm(null)
        await loadItems()
      } else {
        setError('Failed to delete item')
      }
    } catch {
      setError('Network error')
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const filtered = filterCat === 'all' ? items : items.filter((i) => i.category === filterCat)
  const stats = {
    total: items.length,
    inStock: items.filter((i) => i.in_stock).length,
    categories: new Set(items.map((i) => i.category)).size,
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      {/* Top bar */}
      <header className="border-b border-white/10 bg-[#0d0d1a] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold select-none">
            BM
          </div>
          <div>
            <h1 className="font-bold text-white text-sm">Admin Dashboard</h1>
            <p className="text-xs text-gray-500">BM Phone Repair &amp; Accessories</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Site →
          </a>
          <button
            onClick={handleLogout}
            className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Items', value: stats.total, icon: '📦' },
            { label: 'In Stock', value: stats.inStock, icon: '✅' },
            { label: 'Categories', value: stats.categories, icon: '🏷️' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-[#0f0f1a] p-5 flex items-center gap-4"
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center justify-between">
            <span>⚠️ {error}</span>
            <button onClick={() => setError('')} className="text-red-400/60 hover:text-red-400 ml-4">✕</button>
          </div>
        )}
        {success && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center justify-between">
            <span>✓ {success}</span>
            <button onClick={() => setSuccess('')} className="text-green-400/60 hover:text-green-400 ml-4">✕</button>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-500 mr-1">Filter:</span>
            {[{ value: 'all', label: 'All' }, ...CATEGORIES].map((c) => (
              <button
                key={c.value}
                onClick={() => setFilterCat(c.value)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  filterCat === c.value
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {c.value === 'all'
                  ? 'All'
                  : `${CATEGORY_ICONS[c.value]} ${c.label.split(' ')[0]}`}
              </button>
            ))}
          </div>
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 flex-shrink-0"
          >
            <span className="text-base leading-none">+</span> Add Item
          </button>
        </div>

        {/* Items grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading accessories…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">📦</p>
            <p className="text-gray-400">No items yet.</p>
            <button onClick={openAdd} className="mt-4 text-blue-400 text-sm hover:underline">
              Add your first item →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-white/10 bg-[#0f0f1a] overflow-hidden flex flex-col hover:border-white/20 transition-all"
              >
                {/* Image */}
                <div className="h-40 bg-[#0a0a12] flex items-center justify-center relative overflow-hidden">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl opacity-30">{CATEGORY_ICONS[item.category] || '📦'}</span>
                  )}
                  {!item.in_stock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-xs font-bold text-red-400 bg-red-900/80 px-2 py-1 rounded">
                        OUT OF STOCK
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs text-blue-400 font-medium mb-1">
                    {CATEGORY_ICONS[item.category]}{' '}
                    {CATEGORIES.find((c) => c.value === item.category)?.label || item.category}
                  </span>
                  <h3 className="font-semibold text-white text-sm leading-snug mb-2 flex-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    {item.old_price && (
                      <span className="text-xs text-gray-500 line-through">
                        {formatKsh(item.old_price)}
                      </span>
                    )}
                    <span className="text-sm font-bold text-yellow-400">
                      {formatKsh(item.current_price)}
                    </span>
                    {item.old_price && item.old_price > item.current_price && (
                      <span className="text-xs text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">
                        -{Math.round((1 - item.current_price / item.old_price) * 100)}%
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{item.description}</p>
                  )}
                </div>

                {/* Actions */}
                <div className="border-t border-white/10 flex">
                  <button
                    onClick={() => openEdit(item)}
                    className="flex-1 py-2.5 text-xs text-gray-400 hover:text-blue-400 hover:bg-blue-500/5 transition-all font-medium"
                  >
                    ✏️ Edit
                  </button>
                  <div className="w-px bg-white/10" />
                  {deleteConfirm === item.id ? (
                    <>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex-1 py-2.5 text-xs text-red-400 hover:bg-red-500/10 transition-all font-medium"
                      >
                        Confirm
                      </button>
                      <div className="w-px bg-white/10" />
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="flex-1 py-2.5 text-xs text-gray-500 hover:text-gray-300 transition-all"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(item.id)}
                      className="flex-1 py-2.5 text-xs text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all font-medium"
                    >
                      🗑️ Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add / Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f1629] shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="sticky top-0 bg-[#0f1629] border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="font-bold text-white">
                {editItem ? '✏️ Edit Item' : '➕ Add New Item'}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-white text-xl transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {error && (
                <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  ⚠️ {error}
                </div>
              )}

              {/* Image upload */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Product Image
                </label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="relative border-2 border-dashed border-white/20 rounded-xl overflow-hidden cursor-pointer hover:border-blue-500/60 transition-all group"
                  style={{ height: 180 }}
                >
                  {imagePreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imagePreview} alt="preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-500 group-hover:text-blue-400 transition-colors">
                      <span className="text-4xl">📸</span>
                      <span className="text-sm font-medium">Click to upload image</span>
                      <span className="text-xs">PNG, JPG up to 2 MB</span>
                    </div>
                  )}
                  {imagePreview && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white text-sm font-medium bg-black/60 px-3 py-1.5 rounded-lg">
                        Change image
                      </span>
                    </div>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {imagePreview && (
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null)
                      setForm((f) => ({ ...f, image: '' }))
                    }}
                    className="mt-2 text-xs text-red-400 hover:underline"
                  >
                    Remove image
                  </button>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Item Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Samsung AKG Wired Earphones"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a15] border border-white/10 text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  required
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a15] border border-white/10 text-white focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {CATEGORY_ICONS[c.value]} {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Prices */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                    Old / Recent Price (KSh)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={form.old_price}
                    onChange={(e) => setForm((f) => ({ ...f, old_price: e.target.value }))}
                    placeholder="e.g. 500"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a15] border border-white/10 text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                  />
                  <p className="text-xs text-gray-600 mt-1">Leave blank if no discount</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                    Current Price (KSh) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={form.current_price}
                    onChange={(e) => setForm((f) => ({ ...f, current_price: e.target.value }))}
                    placeholder="e.g. 350"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a15] border border-white/10 text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Short product description…"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a15] border border-white/10 text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all text-sm resize-none"
                />
              </div>

              {/* In stock toggle */}
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#0a0a15] border border-white/10">
                <div>
                  <p className="text-sm font-medium text-white">In Stock</p>
                  <p className="text-xs text-gray-500">Show item as available on the website</p>
                </div>
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, in_stock: !f.in_stock }))}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    form.in_stock ? 'bg-blue-600' : 'bg-white/10'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      form.in_stock ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all text-sm disabled:opacity-50 shadow-lg shadow-blue-600/20"
                >
                  {saving ? 'Saving…' : editItem ? '✓ Save Changes' : '+ Upload Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
