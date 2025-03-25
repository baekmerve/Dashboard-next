"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Files, HomeIcon, Users } from "lucide-react";

const links = [
  { name: "Home", href: "/", icon: HomeIcon, title: "MAIN" },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: Files,
    title: "LISTS",
  },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="space-y-3">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name}>
            {link.title && (
              <p className="text-xs font-bold mt-[15px] mb-[5px] text-muted-foreground">
                {link.title}
              </p>
            )}
            <Link
              href={link.href}
              aria-label={link.name} // to ensure accessibility
              className={clsx(
                "flex h-12 grow items-center justify-center gap-3 rounded-md border-2 border-teal-700 text-md font-medium text-teal-800 md:flex-none md:justify-start  md:px-3 hover:scale-105 hover:shadow-lg transition-all duration-300",
                {
                  "bg-teal-700 text-white": pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
