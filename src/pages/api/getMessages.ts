import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI as string);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      await client.connect();
      const db = client.db();
      const collection = db.collection('contacts');

      const messages = await collection.find().toArray();

      return res.status(200).json({ messages });
    } catch (error) {
      console.error('Fetch error:', error);
      return res.status(500).json({ error: 'Failed to fetch messages.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;
