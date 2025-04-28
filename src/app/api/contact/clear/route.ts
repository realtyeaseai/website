// app/api/contact/clear/route.ts
import { connectToDatabase } from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function DELETE() {
  try {
    const { db } = await connectToDatabase()
    await db.collection('contacts').deleteMany({})
    return NextResponse.json({ message: 'All contacts deleted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error clearing contacts:', error)
    return NextResponse.json({ message: 'Failed to delete contacts' }, { status: 500 })
  }
}
