import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

const COLLECTION = 'maintenance';
const SECRET = process.env.ADMIN_SECRET || 'supersecret';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const doc = await db.collection(COLLECTION).findOne({ key: 'mode' });
    const enabled = doc?.enabled === true;
    return NextResponse.json({ enabled });
  } catch (error) {
    console.error('GET /api/maintenance error:', error);
    return NextResponse.json({ error: 'Failed to read status' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { secret, toggle } = await req.json();

  if (secret !== SECRET) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  try {
    const { db } = await connectToDatabase();
    await db.collection(COLLECTION).updateOne(
      { key: 'mode' },
      { $set: { enabled: toggle } },
      { upsert: true }
    );
    return NextResponse.json({ enabled: toggle });
  } catch (error) {
    console.error('POST /api/maintenance error:', error);
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}
