// import { MongoClient, Db } from 'mongodb';

// let client: MongoClient | null = null;
// let db: Db | null = null;

// const MONGODB_URI = process.env.MONGODB_URI || '';
// const MONGODB_DB = process.env.MONGODB_DB || '';

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// if (!MONGODB_DB) {
//   throw new Error('Please define the MONGODB_DB environment variable');
// }

// export async function connectToDatabase() {
//   if (client && db) {
//     return { client, db };
//   }

//   try {
//     client = await MongoClient.connect(MONGODB_URI);

//     db = client.db(MONGODB_DB);
//     console.log('Connected to MongoDB');
//     return { client, db };
//   } catch (error) {
//     console.error('Failed to connect to MongoDB:', error);
//     throw new Error('Failed to connect to the database');
//   }
// }
