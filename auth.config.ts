import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard && !isLoggedIn) {
        // Redirect unauthenticated users to the login page
        return false;
      }

      if (!isOnDashboard && isLoggedIn) {
        // Redirect authenticated users to the dashboard
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      // Continue if on the dashboard and logged in, or not on the dashboard and not logged in
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
