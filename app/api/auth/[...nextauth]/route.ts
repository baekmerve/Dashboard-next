/* eslint-disable @typescript-eslint/no-unused-vars */
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import postgres from "postgres";
import { User } from "@/app/lib/types/types";
import { compare } from "bcrypt";
import { LoginSchema } from "@/app/lib/types/schema";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/register",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const parsedCredentials = LoginSchema.safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        // Fetch user from the database
        const users = await sql<
          User[]
        >`SELECT * FROM users WHERE email=${email}`;
        if (users.length === 0) return null; // No user found

        const user = users[0];

        // Compare hashed password
        const passwordsMatch = await compare(password, user.password);

        if (passwordsMatch) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        }
        return null; // Invalid password
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirecting to:", url); // Debugging
      console.log("Base URL:", baseUrl); // Should log NEXTAUTH_URL

      return url.startsWith(baseUrl) ? url : baseUrl; // Ensures safe redirect
    },
  },
});

export { handler as GET, handler as POST };
