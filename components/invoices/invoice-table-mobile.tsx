import { InvoicesTable } from "@/app/lib/types/types";
import Image from 'next/image';
import React from 'react'
import InvoiceStatus from './status';
import UpdateInvoiceButton from './update-invoice-button';
import DeleteInvoiceButton from './delete-invoice-button';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils/utils';

export default function InvoiceTableMobile({ invoices }: { invoices: InvoicesTable[] }) {

  return (
    <div className="md:hidden">
      {invoices?.map((invoice) => (
        <div key={invoice.id} className="mb-2 w-full rounded-md bg-white p-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="mb-2 flex items-center">
                <Image
                  src={invoice.image_url}
                  className="mr-2 rounded-full"
                  width={28}
                  height={28}
                  alt={`${invoice.name}'s profile picture`}
                />
                <p>{invoice.name}</p>
              </div>
              <p className="text-sm text-gray-500">{invoice.email}</p>
            </div>
            <InvoiceStatus status={invoice.status} />
          </div>
          <div className="flex w-full items-center justify-between pt-4">
            <div>
              <p className="text-xl font-medium">
                {formatCurrency(invoice.amount)}
              </p>
              <p>{formatDateToLocal(invoice.date)}</p>
            </div>
            <div className="flex justify-end gap-2">
              <UpdateInvoiceButton id={invoice.id} />
              <DeleteInvoiceButton id={invoice.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
