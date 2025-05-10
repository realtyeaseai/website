import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb'; // use named import, not clientPromise

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  let isMaintenance = false;

  try {
    const { db, client } = await connectToDatabase();
    const doc = await db.collection('maintenance').findOne({ key: 'mode' });
    isMaintenance = doc?.enabled === true;
    await client.close(); // cleanup
  } catch (error) {
    console.error('MongoDB maintenance check failed:', error);
  }

  if (!isMaintenance) return NextResponse.next();

  if (
    url.pathname === '/maintenance' ||
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  url.pathname = '/maintenance';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|favicon|maintenance|api).*)'],
};
