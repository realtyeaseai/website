// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phone, reason, message , cName} = body;

  if (!firstName || !lastName || !email || !phone || !reason || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('contacts').insertOne({
      firstName,
      lastName,
      cName,
      email,
      phone,
      reason,
      message,
      createdAt: new Date(),
    });
    return NextResponse.json({ message: 'Contact saved', id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('DB error:', error);
    return NextResponse.json({ message: 'Failed to save contact' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const contacts = await db.collection('contacts').find().sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error('DB error:', error);
    return NextResponse.json({ message: 'Failed to fetch contacts' }, { status: 500 });
  }
}
