// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';
import { z } from 'zod'; // For runtime validation

interface ContactData {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Define a schema for input validation
const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('📬 Request method:', req.method);
  console.log('📬 Request body:', req.body);
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  if (!process.env.MONGODB_URI) {
    console.error('Missing MONGODB_URI environment variable');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  // Validate the request body
  const parsedBody = contactSchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({ message: 'Invalid input', errors: parsedBody.error.errors });
  }

  const { name, email, message } = parsedBody.data;

  const newContact: ContactData = {
    name,
    email,
    message,
    createdAt: new Date(),
  };

  try {
    const { db } = await connectToDatabase();
    await db.collection('contacts').insertOne(newContact);
    return res.status(200).json({ message: 'Contact saved' });
  } catch (error: unknown) {
    console.error('Error saving contact:', error);

    if (error instanceof Error) {
      if (error.name === 'MongoNetworkError') {
        return res.status(503).json({ message: 'Database connection error' });
      }
      return res.status(500).json({ message: error.message });
    }

    // Fallback for non-Error objects
    return res.status(500).json({ message: 'An unknown error occurred' });
  }
}
