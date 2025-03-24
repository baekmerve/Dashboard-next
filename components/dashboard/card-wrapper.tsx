import { ArrowUpRight, BanknoteIcon, Clock, Mailbox,  Users } from "lucide-react";
import React, { ReactNode } from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { fetchTotalUsers } from "@/app/lib/actions/customerActions";
import { fetchTotalInvoices } from "@/app/lib/actions/invoiceActions";
import { fetchStatus } from "@/app/lib/actions/otherActions";

interface Props {
  title: string;
  value: number | string;
  linkTitle?: string;
  linkAddress?: string;
  icon: ReactNode;
}

export default async function CardWrapper() {
  const [
    numberOfCustomers,
    numberOfInvoices,
    { totalPaidInvoices, totalPendingInvoices },
  ] = await Promise.all([
    fetchTotalUsers(),
    fetchTotalInvoices(),
    fetchStatus(),
  ]);

  return (
    <>
      <Widget
        title="Collected"
        value={totalPaidInvoices}
        icon={<BanknoteIcon className="text-green-600" />}
      />
      <Widget
        title="Pending"
        value={totalPendingInvoices}
        icon={<Clock className="text-yellow-500" />}
      />
      <Widget
        title="Total Invoices"
        value={numberOfInvoices}
        icon={<Mailbox className="text-blue-600" />}
        linkTitle="See all invoices"
        linkAddress="/dashboard/invoices"
      />
      <Widget
        title="Total Customers"
        value={numberOfCustomers}
        icon={<Users className="text-teal-600" />}
        linkTitle="See all customers"
        linkAddress="/dashboard/customers"
      />
    </>
  );
}

function Widget({ title, value, linkTitle, linkAddress, icon }: Props) {
  return (
    <Card className="rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-700 overflow-hidden whitespace-normal break-words">
          {title}
        </h1>
        <span className="text-xl">{icon}</span>
      </div>

      <CardContent >
        <h2 className="text-3xl font-bold text-gray-900 overflow-hidden whitespace-normal break-words">
          {value}
        </h2>

        {linkTitle && (
          <div className="mt-2 flex gap-2 items-center">
            <Link
              href={linkAddress ?? ""}
              className="text-sm font-medium text-teal-800 hover:text-teal-900 hover:underline transition-all "
            >
              {linkTitle}
            </Link>
            <ArrowUpRight className="text-teal-800  size-5" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
