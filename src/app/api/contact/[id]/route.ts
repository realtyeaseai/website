import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

// Define the correct parameter types according to Next.js requirements
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  // Await the params object
  const params = await context.params;
  const id = params.id;
  
  if (!id) {
    return NextResponse.json({ message: 'ID is required' }, { status: 400 });
  }
  
  try {
    const { client, db } = await connectToDatabase();
    const collection = db.collection('contacts');
    
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    await client.close();
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Contact deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}