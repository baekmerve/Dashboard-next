import React, { Suspense } from "react";
import RegisterForm from "../../components/forms/register-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 border-2  rounded-lg shadow-xl">
          {/* Header Section */}
          <div className="flex flex-col bg-teal-700 h-30 rounded-xl justify-center items-center text-center text-white">
            <h1 className="text-2xl font-bold ">Welcome to The Dashboard</h1>
            <p className="mt-2">Please fill in the fields and continue.</p>
          </div>

          {/* Login Form */}
          <div className="mt-6">
            <Suspense>
              <RegisterForm />
            </Suspense>
          </div>
        </div>
      </main>
    );
}
