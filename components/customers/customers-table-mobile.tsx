import { FormattedCustomersTable } from "@/app/lib/types/types";
import Image from "next/image";
import React from "react";


interface Props {
  customers: FormattedCustomersTable[];
}
export default function CustomerTableMobile({ customers }: Props) {
  return (
    <div className="md:hidden">
      {customers?.map((customer) => (
        <div key={customer.id} className="mb-2 w-full rounded-md bg-white p-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="mb-2 flex items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src={customer.image_url}
                    className="rounded-full"
                    alt={`${customer.name}'s profile picture`}
                    width={28}
                    height={28}
                  />
                  <p>{customer.name}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{customer.email}</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-b py-5">
            <div className="flex w-1/2 flex-col">
              <p className="text-xs">Pending</p>
              <p className="font-medium">{customer.total_pending}</p>
            </div>
            <div className="flex w-1/2 flex-col">
              <p className="text-xs">Paid</p>
              <p className="font-medium">{customer.total_paid}</p>
            </div>
          </div>
          <div className="pt-4 text-sm">
            <p>{customer.total_invoices} invoices</p>
          </div>
        </div>
      ))}
    </div>
  );
}
