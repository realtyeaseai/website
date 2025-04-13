import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();

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
    } catch (error) {
      console.error('DB error:', error);
      return res.status(500).json({ message: 'Failed to save contact' });
    }
  }

  if (req.method === 'GET') {
    try {
      const contacts = await db.collection('contacts').find().sort({ createdAt: -1 }).toArray();
      return res.status(200).json({ contacts });
    } catch (error) {
      console.error('DB error:', error);
      return res.status(500).json({ message: 'Failed to fetch contacts' });
    }
  }

  // For all other methods
  return res.status(405).json({ message: 'Method Not Allowed' });
}
