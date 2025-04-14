// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

interface ContactData {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newContact: ContactData = {
    name,
    email,
    message,
    createdAt: new Date()
  };

  try {
    const { db } = await connectToDatabase();
    await db.collection('contacts').insertOne(newContact);
    return res.status(200).json({ message: 'Contact saved' });
  } catch (error) {
    // Now accepting the error and logging it
    console.error('Error saving contact:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
