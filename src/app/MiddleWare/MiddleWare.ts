import { NextRequest, NextResponse } from 'next/server';

// Hardcoded fallback for environments where dynamic check isn't possible
const FALLBACK_MAINTENANCE = false;

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (!FALLBACK_MAINTENANCE) return NextResponse.next();

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
