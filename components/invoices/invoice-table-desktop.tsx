import { InvoicesTable } from '@/app/lib/types/types'
import Image from 'next/image';
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils/utils';
import UpdateInvoiceButton from './update-invoice-button';
import DeleteInvoiceButton from './delete-invoice-button';
import InvoiceStatus from './status';
import { Card } from '../ui/card';

export default function InvoiceTableDesktop({ invoices }: { invoices: InvoicesTable[] }) {
  return (
    <Card className="hidden md:table min-w-full bg-white border-2 rounded-xl shadow-xl p-4">
      <Table className=" bg-gray-100  rounded-2xl ">
        <TableHeader >
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices?.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    src={invoice.image_url}
                    className="rounded-full"
                    width={28}
                    height={28}
                    alt={`${invoice.name}'s profile`}
                  />
                  <p>{invoice.name}</p>
                </div>
              </TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>{formatCurrency(invoice.amount)}</TableCell>
              <TableCell>{formatDateToLocal(invoice.date)}</TableCell>
              <TableCell>
                <InvoiceStatus status={invoice.status} />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-3">
                  <UpdateInvoiceButton id={invoice.id} />
                  <DeleteInvoiceButton id={invoice.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
