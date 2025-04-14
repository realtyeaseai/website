import { MongoClient, Db } from 'mongodb';

interface DbConnection {
  client: MongoClient;
  db: Db;
}

let cachedConnection: DbConnection | null = null;

export async function connectToDatabase(): Promise<DbConnection> {
  if (cachedConnection) return cachedConnection;
  
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable not defined');
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  
  cachedConnection = { client, db };
  return cachedConnection;
}