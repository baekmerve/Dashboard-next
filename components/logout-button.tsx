"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <Button
      className="w-full h-12 cursor-pointer border-2 border-teal-700 text-md  bg-gray-100 text-teal-700 hover:scale-105 hover:text-white hover:bg-red-300 hover:border-red-600"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </Button>
  );
}
