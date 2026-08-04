import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminToken } from '@/app/lib/auth'

export async function GET(req: NextRequest) {
  const ok = await verifyAdminToken(req)
  if (!ok) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return NextResponse.json({ ok: true })
}
