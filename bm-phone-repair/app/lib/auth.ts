import { jwtVerify } from 'jose'
import { NextRequest } from 'next/server'

const JWT_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'bm-repair-fallback-secret-change-in-prod'
)

export async function verifyAdminToken(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get('admin_token')?.value
  if (!token) return false
  try {
    await jwtVerify(token, JWT_SECRET)
    return true
  } catch {
    return false
  }
}
