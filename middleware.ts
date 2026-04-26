import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase()

  const redirectHosts = [
    'shikao-web.com',
    'www.shikao-web.com',
    'www.shikao-web.net',
  ]

  if (host && redirectHosts.includes(host)) {
    const url = request.nextUrl.clone()

    url.protocol = 'https'
    url.hostname = 'shikao-web.net'
    url.port = '' // 本番用

    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}