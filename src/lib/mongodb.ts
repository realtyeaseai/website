/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoClient, Collection, WithId, Document, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Connect to the database
export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(); // Specify your DB name or use default
  return { client, db };
}

// Get collection dynamically using db object
export async function getCollection(collectionName: string): Promise<Collection<Document>> {
  const { db } = await connectToDatabase(); // Get the db instance
  return db.collection(collectionName); // Use db object to get the collection
}

// Utility function to create a record (Insert one document)
export async function createRecord(collectionName: string, record: any) {
  const collection = await getCollection(collectionName); // Get collection
  const result = await collection.insertOne(record); // Insert into the collection
  return result;
}

// Utility function to create multiple records (Insert many documents)
export async function createMultipleRecords(collectionName: string, records: any[]) {
  const collection = await getCollection(collectionName); // Get collection
  const result = await collection.insertMany(records); // Insert into the collection
  return result;
}

// Utility function to get all records from a collection
export async function getAllRecords(collectionName: string): Promise<WithId<Document>[]> {
  const collection = await getCollection(collectionName); // Get collection
  const records = await collection.find().toArray(); // Retrieve all records
  return records;
}

// Utility function to get a record by ID
export async function getRecordById(collectionName: string, id: string): Promise<WithId<Document> | null> {
  const collection = await getCollection(collectionName); // Get collection
  const record = await collection.findOne({ _id: new ObjectId(id) }); // Find a record by ID
  return record;
}

// Utility function to update a record (Update one document)
export async function updateRecord(collectionName: string, id: string, update: any) {
  const collection = await getCollection(collectionName); // Get collection
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: update }
  ); // Update the record in the collection
  return result;
}

// Utility function to update multiple records (Update many documents)
export async function updateMultipleRecords(collectionName: string, filter: any, update: any) {
  const collection = await getCollection(collectionName); // Get collection
  const result = await collection.updateMany(filter, { $set: update }); // Update multiple records
  return result;
}

// Utility function to delete a record (Delete one document)
export async function deleteRecord(collectionName: string, id: string) {
  const collection = await getCollection(collectionName); // Get collection
  const result = await collection.deleteOne({ _id: new ObjectId(id) }); // Delete a record by ID
  return result;
}

// Utility function to delete multiple records (Delete many documents)
export async function deleteMultipleRecords(collectionName: string, filter: any) {
  const collection = await getCollection(collectionName); // Get collection
  const result = await collection.deleteMany(filter); // Delete multiple records based on a filter
  return result;
}

// Utility function to count records in a collection
export async function countRecords(collectionName: string) {
  const collection = await getCollection(collectionName); // Get collection
  const count = await collection.countDocuments(); // Get the count of documents
  return count;
}

// Utility function to find records by a custom filter
export async function findRecordsByFilter(collectionName: string, filter: any) {
  const collection = await getCollection(collectionName); // Get collection
  const records = await collection.find(filter).toArray(); // Find documents based on a custom filter
  return records;
}

// Utility function to find a single record by a custom filter
export async function findRecordByFilter(collectionName: string, filter: any) {
  const collection = await getCollection(collectionName); // Get collection
  const record = await collection.findOne(filter); // Find a single document based on a custom filter
  return record;
}
