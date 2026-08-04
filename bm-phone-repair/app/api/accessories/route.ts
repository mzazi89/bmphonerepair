import { NextRequest, NextResponse } from 'next/server'
import { getAllAccessories, getAccessoriesByCategory, createAccessory } from '../../lib/db'
import { verifyAdminToken } from '../../lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')

    const items = category
      ? await getAccessoriesByCategory(category)
      : await getAllAccessories()

    return NextResponse.json({ items })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch accessories' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const isAdmin = await verifyAdminToken(req)
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { name, category, old_price, current_price, image, description, in_stock } = body

    if (!name || !category || !current_price) {
      return NextResponse.json(
        { error: 'name, category, and current_price are required' },
        { status: 400 }
      )
    }

    const item = await createAccessory({
      name,
      category,
      old_price: old_price ? Number(old_price) : null,
      current_price: Number(current_price),
      image: image || null,
      description: description || null,
      in_stock: in_stock !== false,
    })

    return NextResponse.json({ item }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to create accessory' }, { status: 500 })
  }
}
