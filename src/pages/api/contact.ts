import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';
import { Db } from 'mongodb';

const allowedOrigins = [
  'https://realtyeaseai.com',
  'https://www.realtyeaseai.com',
  'http://localhost:3000',
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let db: Db;
  try {
    const { db: dbInstance } = await Promise.race([
      connectToDatabase(),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error('MongoDB timeout')), 7000))
    ]);
    db = dbInstance;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown DB error';
    console.error('❌ DB Error:', msg);
    return res.status(500).json({ message: 'Database connection failed', error: msg });
  }

  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, reason, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !reason || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const result = await db.collection('contacts').insertOne({
        firstName,
        lastName,
        email,
        phone,
        reason,
        message,
        createdAt: new Date(),
      });
      return res.status(201).json({ message: 'Contact saved', id: result.insertedId });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown insert error';
      console.error('❌ Insert failed:', msg);
      return res.status(500).json({ message: 'Failed to save contact', error: msg });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
