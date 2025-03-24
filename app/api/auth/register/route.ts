/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegisterSchema } from "@/app/lib/types/schema";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Validate input
    const parsedCredentials = RegisterSchema.safeParse({
      name,
      email,
      password,
    });
    if (!parsedCredentials.success) {
      // const errors = parsedCredentials.error.format();
      const errors = parsedCredentials.error.flatten().fieldErrors;
      return NextResponse.json({ error: errors }, { status: 400 });
    }

    // Check if the email already exists
    const existingUser = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;
    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert the new user
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name},${email}, ${hashedPassword})
    `;
    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during user registration:", error);

    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
