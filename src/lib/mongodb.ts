import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const options = {};

let client: MongoClient;
let db: Db;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (db && client) {
    return { client, db };
  }

  client = new MongoClient(uri, options);
  await client.connect();
  db = client.db(); // default DB from URI
  return { client, db };
}
