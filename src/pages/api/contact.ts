import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import Cors from 'cors';
import runMiddleware from '../../lib/runMiddleware'; // helper to run middleware

// Initialize CORS
const cors = Cors({
  methods: ['POST', 'GET', 'OPTIONS'],
  origin: '*', // adjust if you want tighter security
});

// Main handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('contacts');

  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phone, reason, message } = req.body;

      if (!firstName || !lastName || !email || !message || !reason) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const contact = {
        firstName,
        lastName,
        email,
        phone: phone || '',
        reason,
        message,
        createdAt: new Date(),
      };

      const result = await collection.insertOne(contact);

      return res.status(201).json({ message: 'Contact submitted successfully', id: result.insertedId });
    } catch (err) {
      console.error('❌ POST /api/contact error:', err);
      return res.status(500).json({ message: 'Failed to submit contact' });
    }
  } else if (req.method === 'GET') {
    try {
      const contacts = await collection.find({}).sort({ createdAt: -1 }).toArray();
      return res.status(200).json({ contacts });
    } catch (err) {
      console.error('❌ GET /api/contact error:', err);
      return res.status(500).json({ message: 'Failed to fetch contacts' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
