import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(request) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
      unauthorized: (request) => {
        const url = new URL('/login', request.url);
        return NextResponse.redirect(url);
      },
    },
    matcher: [
      '/((?!login).*)', // Protege tudo que não é /login
    ],
  }
)

export const config = {
  matcher: [
    '/((?!/api/auth).*)', // Exclui a API do NextAuth
    '/',
  ],
}