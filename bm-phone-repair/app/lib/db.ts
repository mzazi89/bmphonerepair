import { Pool } from 'pg'

let pool: Pool | null = null

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    })
  }
  return pool
}

export interface Accessory {
  id: number
  name: string
  category: string
  old_price: number | null
  current_price: number
  image: string | null
  in_stock: boolean
  description: string | null
  created_at: string
  updated_at: string
}

export async function getAllAccessories(): Promise<Accessory[]> {
  const db = getPool()
  const res = await db.query<Accessory>(
    'SELECT * FROM accessories ORDER BY created_at DESC'
  )
  return res.rows
}

export async function getAccessoriesByCategory(category: string): Promise<Accessory[]> {
  const db = getPool()
  const res = await db.query<Accessory>(
    'SELECT * FROM accessories WHERE category = $1 ORDER BY created_at DESC',
    [category]
  )
  return res.rows
}

export async function createAccessory(data: {
  name: string
  category: string
  old_price?: number | null
  current_price: number
  image?: string | null
  description?: string | null
  in_stock?: boolean
}): Promise<Accessory> {
  const db = getPool()
  const res = await db.query<Accessory>(
    `INSERT INTO accessories (name, category, old_price, current_price, image, description, in_stock)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [
      data.name,
      data.category,
      data.old_price ?? null,
      data.current_price,
      data.image ?? null,
      data.description ?? null,
      data.in_stock ?? true,
    ]
  )
  return res.rows[0]
}

export async function updateAccessory(
  id: number,
  data: {
    name?: string
    category?: string
    old_price?: number | null
    current_price?: number
    image?: string | null
    description?: string | null
    in_stock?: boolean
  }
): Promise<Accessory | null> {
  const db = getPool()
  const res = await db.query<Accessory>(
    `UPDATE accessories SET
      name = COALESCE($2, name),
      category = COALESCE($3, category),
      old_price = $4,
      current_price = COALESCE($5, current_price),
      image = $6,
      description = $7,
      in_stock = COALESCE($8, in_stock),
      updated_at = NOW()
     WHERE id = $1 RETURNING *`,
    [
      id,
      data.name ?? null,
      data.category ?? null,
      data.old_price !== undefined ? data.old_price : null,
      data.current_price ?? null,
      data.image !== undefined ? data.image : null,
      data.description !== undefined ? data.description : null,
      data.in_stock ?? null,
    ]
  )
  return res.rows[0] ?? null
}

export async function deleteAccessory(id: number): Promise<boolean> {
  const db = getPool()
  const res = await db.query('DELETE FROM accessories WHERE id = $1', [id])
  return (res.rowCount ?? 0) > 0
}
