import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/db';
import { ContactFormData, ApiResponse } from '../../types/contact';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default async function handler(
  req: NextApiRequest & { body: ContactFormData },
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate with Zod
    const validation = contactSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        message: 'Validation failed',
        error: validation.error.errors.map((e) => e.message).join(', '),
      });
    }

    const { db } = await connectToDatabase();

    const result = await db.collection('contacts').insertOne({
      ...validation.data,
      date: new Date(),
    });

    // Extract the insertedId from the result
    return res.status(201).json({
      message: 'Message sent successfully!',
      data: { insertedId: result.insertedId }, // Explicitly return the insertedId
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({
      message: 'Error storing message',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}