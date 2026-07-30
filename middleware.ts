import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'bm-repair-fallback-secret-change-in-prod'
)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only guard /admin/* routes
  if (!pathname.startsWith('/admin')) return NextResponse.next()

  // Always allow the login page through
  if (pathname === '/admin/login') return NextResponse.next()

  // Allow the login API through
  if (pathname.startsWith('/api/admin')) return NextResponse.next()

  const token = request.cookies.get('admin_token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  try {
    await jwtVerify(token, JWT_SECRET)
    return NextResponse.next()
  } catch {
    const res = NextResponse.redirect(new URL('/admin/login', request.url))
    res.cookies.delete('admin_token')
    return res
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}
