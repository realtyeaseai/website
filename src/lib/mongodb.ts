import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('Missing MONGODB_URI in environment variables');

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri);

// Use cached promise in dev to prevent multiple connections during HMR
const clientPromise =
  global._mongoClientPromise ?? (global._mongoClientPromise = client.connect());

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db();
  return { client, db };
}
