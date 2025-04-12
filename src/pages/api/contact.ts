// ---------------working contact form for Resend--------------

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }
//   console.log('Incoming request body:', req.body);


//   const { name, email, message, firstName, lastName, phone, reason } = req.body;

//   if (!name || !email || !message || !firstName || !lastName || !reason || !phone) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//     await resend.emails.send({
//       from: process.env.RESEND_FROM_EMAIL!,
//       to: process.env.RESEND_TO_EMAIL!,
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
// New contact form submission:

// Name: ${firstName} ${lastName}
// Email: ${email}
// Phone: ${phone}
// Reason: ${reason}
// Message: ${message}
//       `,
//     });

//     return res.status(200).json({ message: 'Message sent successfully' });
//   } catch (error) {
//     console.error('Resend error:', error);
//     return res.status(500).json({ message: 'Failed to send email' });
//   }
// }

