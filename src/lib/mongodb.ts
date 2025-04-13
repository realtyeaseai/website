import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
if (!uri) throw new Error('❌ MONGODB_URI not set in .env.local');

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(); // or specify like db('realtyease')
  return { client, db };
}
