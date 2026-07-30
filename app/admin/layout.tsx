import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel | BM Phone Repair',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // No site Navbar/Footer in admin — standalone layout
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      {children}
    </div>
  )
}
