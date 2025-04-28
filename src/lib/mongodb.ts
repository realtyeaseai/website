/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoClient, Collection, WithId, Document, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// Connect to the database
export async function connectToDatabase(): Promise<{ client: MongoClient; db: any }> { // Changed db type to any
  const client = new MongoClient(uri, options);
  await client.connect();
  const db = client.db(); // Specify your DB name or use default
  return { client, db };
}

// Get collection dynamically using db object
export async function getCollection(collectionName: string): Promise<Collection<Document>> {
  const { db } = await connectToDatabase(); // Get a new connection each time
  return db.collection(collectionName);
}

// Utility function to create a record (Insert one document)
export async function createRecord(collectionName: string, record: any) {
  const { client, db } = await connectToDatabase(); // Get a new connection
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(record);
  await client.close(); // Close the connection after operation
  return result;
}

// Utility function to create multiple records (Insert many documents)
export async function createMultipleRecords(collectionName: string, records: any[]) {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.insertMany(records);
  await client.close();
  return result;
}

// Utility function to get all records from a collection
export async function getAllRecords(collectionName: string): Promise<WithId<Document>[]> {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const records = await collection.find().toArray();
  await client.close();
  return records;
}

// Utility function to get a record by ID
export async function getRecordById(collectionName: string, id: string): Promise<WithId<Document> | null> {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const record = await collection.findOne({ _id: new ObjectId(id) });
  await client.close();
  return record;
}

// Utility function to update a record (Update one document)
export async function updateRecord(collectionName: string, id: string, update: any) {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: update }
  );
  await client.close();
  return result;
}

// Utility function to update multiple records (Update many documents)
export async function updateMultipleRecords(collectionName: string, filter: any, update: any) {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.updateMany(filter, { $set: update });
  await client.close();
  return result;
}

// Utility function to delete a record (Delete one document)
export async function deleteRecord(collectionName: string, id: string) {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  await client.close();
  return result;
}

// Utility function to delete multiple records (Delete many documents)
export async function deleteMultipleRecords(collectionName: string, filter: any) {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.deleteMany(filter);
  await client.close();
  return result;
}

// Utility function to count records in a collection
export async function countRecords(collectionName: string) {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const count = await collection.countDocuments();
  await client.close();
  return count;
}

// Utility function to find records by a custom filter
export async function findRecordsByFilter(collectionName: string, filter: any) {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const records = await collection.find(filter).toArray();
  await client.close();
  return records;
}

// Utility function to find a single record by a custom filter
export async function findRecordByFilter(collectionName: string, filter: any) {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(collectionName);
  const record = await collection.findOne(filter);
  await client.close();
  return record;
}
