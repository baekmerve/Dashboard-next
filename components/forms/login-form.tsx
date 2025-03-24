"use client";

import { ArrowRight, AtSign, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (!response?.ok) {
      setError("Invalid email or password.");
      return;
    }
    router.push("/");
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-lg bg-gray-50 px-6 pb-4 pt-6 border-2 border-teal-700">
        <div className="w-full">
          <div>
            <label
              className="mb-2 mt-5 block text-sm font-medium"
              htmlFor="email"
            >
              Email
            </label>

            <div className="relative">
              <Input
                className="peer block w-full rounded-md py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSign className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-teal-700" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-2 mt-5 block text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                className="peer block w-full rounded-md  py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyRound className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-teal-700" />
            </div>
          </div>
        </div>

        {error && (
          <div
            className=" mt-4 text-red-600 text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            <p>{error}</p>
          </div>
        )}

        <Button className="mt-6 w-full h-12 bg-teal-700 hover:bg-teal-800 cursor-pointer text-md">
          Log in <ArrowRight className="ml-auto size-6 text-white" />
        </Button>

        <div className="text-sm mt-3">
          Don&apos;t you have an acount?
          <Link
            href="/register"
            className="ml-2 text-teal-700 hover:underline text-base font-semibold cursor-pointer"
          >
            Register now!
          </Link>
        </div>
      </div>
    </form>
  );
}
