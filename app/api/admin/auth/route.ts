import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'

const JWT_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'bm-repair-fallback-secret-change-in-prod'
)

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    const validUsername = process.env.ADMIN_USERNAME
    const validPassword = process.env.ADMIN_PASSWORD

    if (!validUsername || !validPassword) {
      return NextResponse.json(
        { error: 'Admin credentials not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD in Vercel environment variables.' },
        { status: 503 }
      )
    }

    if (username !== validUsername || password !== validPassword) {
      // Small delay to slow brute-force attempts
      await new Promise((r) => setTimeout(r, 800))
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 })
    }

    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('12h')
      .sign(JWT_SECRET)

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 12, // 12 hours
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Login failed. Try again.' }, { status: 500 })
  }
}
