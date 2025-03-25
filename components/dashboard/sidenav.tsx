import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import NavLinks from "./nav-links";
import { getServerSession } from "next-auth";
import LogoutButton from "../logout-button";
import LoginButton from "../login-button";
import Image from "next/image";

export default async function SideNav() {
  const session = await getServerSession();
  return (
    <div className="flex h-full flex-col p-4 gap-6">
      {/* Dashboard Header */}
      <div className="flex flex-col gap-3 items-start bg-teal-700 rounded-xl p-5 shadow-lg h-30 md:h-36">
        <Link
          href="/"
          className="flex items-center gap-3 text-white hover:opacity-80 transition"
        >
          <LayoutDashboard className="size-8" />
          <h1 className="text-xl font-semibold">The Dashboard</h1>
        </Link>
        {session?.user && (
          <div className="flex gap-3 md:pt-3 justify-center items-center">
            <Image
              src={session.user.image ?? "/customers/avatar.avif"}
              width={40}
              height={40}
              alt={`${session.user.name}'s profile`}
              className="shrink-0 "
            />
            <div className="text-start text-white">
              <span className="text-sm font-bold block">
                {session.user.name}
              </span>
              <span className="text-xs block ">{session.user.email}</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation + Auth */}
      <div className="flex md:flex-col flex-1 justify-between items-center gap-4 border-2 px-2 py-5 rounded-lg shadow-md bg-white ">
        {/* Navigation Links */}
        <nav className="flex md:flex-col w-full gap-2">
          <NavLinks />
        </nav>

        {/* Auth Button */}
        <div className="md:w-full w-auto md:mb-10">
          {session ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
}
