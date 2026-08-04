// Admin area has its own standalone shell — no public Navbar/Footer
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
