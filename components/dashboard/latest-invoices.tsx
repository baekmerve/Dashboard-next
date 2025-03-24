import Image from "next/image";
import { fetchLatestInvoices } from "@/app/lib/actions/invoiceActions";
import { Card, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { FileSpreadsheet } from "lucide-react";

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();


  return (
    <Card className="flex w-full flex-col md:col-span-4 rounded-xl shadow-xl px-5 my-2 ">
      <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
        <FileSpreadsheet /> Latest Invoices
      </CardTitle>

      <Table className=" rounded-xl bg-gray-100">
        <TableHeader className="">
          <TableRow>
            <TableHead className="">Image</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {latestInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
              </TableCell>
              <TableCell className="truncate">{invoice.name}</TableCell>
              <TableCell className="truncate">{invoice.email}</TableCell>
              <TableCell className="truncate text-right">
                {invoice.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
