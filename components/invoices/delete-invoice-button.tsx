import { deleteInvoice } from "@/app/lib/actions/invoiceActions";
import { TrashIcon } from "lucide-react";

import React from "react";

export default function DeleteInvoiceButton({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button
        type="submit"
        className="rounded-md border p-2 hover:scale-105 hover:bg-red-700 hover:text-white cursor-pointer"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="size-5" />
      </button>
    </form>
  );
}
