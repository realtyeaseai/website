import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

const allowedOrigins = [
  'https://realtyeaseai.com',
  'https://www.realtyeaseai.com',
  'http://localhost:3000',
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const origin = req.headers.origin;
  console.log(`📩 ${req.method} /api/contact from origin: ${origin}`);

  // Handle CORS
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Preflight response
  if (req.method === 'OPTIONS') {
    console.log('🛬 Preflight request handled');
    return res.status(200).end();
  }

  // Try DB connection
  let db;
  try {
    const connection = await connectToDatabase();
    db = connection.db;
    console.log('✅ Connected to MongoDB');
} catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ MongoDB connection error:', errMsg);
    return res.status(500).json({ message: 'Database connection failed', error: errMsg });
  }
  

  // POST request - Save contact
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, reason, message } = req.body;
    console.log('📨 Form data:', req.body);

    if (!firstName || !lastName || !email || !phone || !reason || !message) {
      console.warn('⚠️ Missing required fields');
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

      console.log('✅ Contact saved with ID:', result.insertedId);
      return res.status(201).json({ message: 'Contact saved', id: result.insertedId });
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : 'Unknown error';
        console.error('❌ Failed to insert contact:', errMsg);
        return res.status(500).json({ message: 'Failed to save contact', error: errMsg });
      }
      
  }

  // GET request - Return contacts
  if (req.method === 'GET') {
    try {
      const contacts = await db
        .collection('contacts')
        .find()
        .sort({ createdAt: -1 })
        .toArray();

      console.log(`📥 Returned ${contacts.length} contacts`);
      return res.status(200).json({ contacts });
    } catch (error:unknown) {
      const errMsg = error instanceof Error ? error.message: "Unknown error"  
      console.error('❌ Failed to fetch contacts:', errMsg);
      return res.status(500).json({ message: 'Failed to fetch contacts', error: errMsg });
    }
  }

  // Unsupported method
  console.warn(`🚫 Method not allowed: ${req.method}`);
  return res.status(405).json({ message: 'Method Not Allowed' });
}
