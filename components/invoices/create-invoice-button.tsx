import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CreateInvoiceButton() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-teal-700 px-4 text-sm font-medium text-white transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
    >
      <span className="hidden md:block">Create Invoice</span>{" "}
      <Plus className="size-5 md:ml-2" />
    </Link>
  );
}
