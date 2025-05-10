import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const MAINTENANCE_FILE = path.resolve(process.cwd(), 'config/maintenance.json');
const SECRET = process.env.ADMIN_SECRET || 'supersecret'; // Set in .env

// Handle GET requests
export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get('secret');  // Secret from query parameter

  if (secret !== SECRET) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  try {
    const data = fs.readFileSync(MAINTENANCE_FILE, 'utf-8');  // Read the maintenance file
    const enabled = JSON.parse(data).enabled;
    return NextResponse.json({ enabled });
  } catch (error) {
    console.error('Error reading maintenance status:', error);  // Log the error for debugging
    return NextResponse.json({ error: 'Failed to read status' }, { status: 500 });
  }
}

// Handle POST requests
export async function POST(req: Request) {
  const { secret, toggle } = await req.json();  // Get secret and toggle status from request body

  if (secret !== SECRET) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  try {
    fs.writeFileSync(MAINTENANCE_FILE, JSON.stringify({ enabled: toggle }));  // Update maintenance status
    return NextResponse.json({ enabled: toggle });
  } catch (error) {
    console.error('Error updating maintenance status:', error);  // Log the error for debugging
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}
