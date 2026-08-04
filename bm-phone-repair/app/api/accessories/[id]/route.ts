import { NextRequest, NextResponse } from 'next/server'
import { updateAccessory, deleteAccessory } from '../../../lib/db'
import { verifyAdminToken } from '../../../lib/auth'

export const dynamic = 'force-dynamic'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAdmin = await verifyAdminToken(req)
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const numId = parseInt(params.id, 10)
    if (isNaN(numId)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
    }

    const body = await req.json()
    const { name, category, old_price, current_price, image, description, in_stock } = body

    const item = await updateAccessory(numId, {
      name,
      category,
      old_price: old_price !== undefined ? (old_price ? Number(old_price) : null) : undefined,
      current_price: current_price !== undefined ? Number(current_price) : undefined,
      image,
      description,
      in_stock,
    })

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    return NextResponse.json({ item })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to update accessory' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAdmin = await verifyAdminToken(req)
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const numId = parseInt(params.id, 10)
    if (isNaN(numId)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
    }

    const deleted = await deleteAccessory(numId)
    if (!deleted) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to delete accessory' }, { status: 500 })
  }
}
