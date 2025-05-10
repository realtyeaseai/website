import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export function middleware(req: NextRequest) {
  const maintenanceFile = path.resolve(process.cwd(), 'config/maintenance.json');

  let isMaintenance = false;

  try {
    const data = fs.readFileSync(maintenanceFile, 'utf-8');
    isMaintenance = JSON.parse(data).enabled;
  } catch (error) {
    console.error('Error reading maintenance config:', error);
  }

  const url = req.nextUrl.clone();

  if (!isMaintenance) return NextResponse.next();

  // Allow access to maintenance page and static resources
  if (
    url.pathname === '/maintenance' ||
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to /maintenance
  url.pathname = '/maintenance';
  return NextResponse.rewrite(url);
}
