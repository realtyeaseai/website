import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!; // Assuming MongoDB URI is set in environment variables
const DB_NAME = 'test'; // replace with your DB name
const COLLECTION = 'maintenance';

let client: MongoClient | null = null;

const getClient = async (): Promise<MongoClient> => {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client;
};

export async function isInMaintenanceMode(): Promise<boolean> {
  const client = await getClient(); // Get the MongoClient instance
  const db = client.db(DB_NAME);
  const doc = await db.collection(COLLECTION).findOne({ key: 'mode' });
  return doc?.enabled === true;
}

export async function setMaintenanceMode(enabled: boolean): Promise<void> {
  const client = await getClient(); // Get the MongoClient instance
  const db = client.db(DB_NAME);
  await db.collection(COLLECTION).updateOne(
    { key: 'mode' },
    { $set: { enabled } },
    { upsert: true }
  );
}
