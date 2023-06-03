import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '@/lib/db';

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // Connect to MongoDB
        const { db } = await connectToDatabase();

        // Find user in the database
        const user = await db.collection('users').findOne({ username });

        if (user && user.password === password) {
          // Authentication successful
          return { id: user._id, name: user.username };
        }

        // Authentication failed
        throw new Error('Invalid username or password');
      },
    }),
  ],
});
