import { PencilIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function UpdateInvoiceButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:scale-105 hover:bg-teal-600 hover:text-white"
    >
      <PencilIcon className="size-5" />
    </Link>
  );
}
