import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/login">
      <Button className="w-full h-12 cursor-pointer border-2 border-teal-700 text-md text-teal-700 bg-white duration-300 hover:scale-105 hover:bg-teal-100">
        Login
      </Button>
    </Link>
  );
}

