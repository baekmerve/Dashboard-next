import { FormattedCustomersTable } from "@/app/lib/types/types";
import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Card } from "../ui/card";

interface Props {
  customers: FormattedCustomersTable[];
}
export default function CustomerTableDesktop({ customers }: Props) {
  return (
    <Card className="hidden md:table min-w-full bg-white border-2 rounded-xl shadow-xl p-4">
      <Table className=" bg-gray-100  rounded-2xl ">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Total Invoices</TableHead>
            <TableHead>Total Pending</TableHead>
            <TableHead>Total Paid</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers?.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    src={customer.image_url}
                    className="rounded-full"
                    width={28}
                    height={28}
                    alt={`${customer.name}'s profile`}
                  />
                  <p>{customer.name}</p>
                </div>
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.total_invoices}</TableCell>
              <TableCell>{customer.total_pending}</TableCell>
              <TableCell>{customer.total_paid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
