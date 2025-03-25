import { Suspense } from "react";
import { Metadata } from "next";
import CreateInvoiceButton from "@/components/invoices/create-invoice-button";
import {
  fetchFilteredInvoices,
  fetchInvoicesPages,
} from "@/app/lib/actions/invoiceActions";
import Search from "@/components/search";

import TablePagination from "@/components/invoices/table-pagination";
import InvoiceTableDesktop from "@/components/invoices/invoice-table-desktop";
import InvoiceTableMobile from "@/components/invoices/invoice-table-mobile";
import { InvoicesPageSkeleton } from "@/components/skeletons/invoice-page-skeleton";

export const metadata: Metadata = {
  title: "Invoices",
};

async function InvoicePage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const [totalPages, invoices] = await Promise.all([
    fetchInvoicesPages(query),
    fetchFilteredInvoices(query, currentPage),
  ]);
  return (
    <div className="w-full">
      <h1 className="mb-4 font-bold text-xl md:text-2xl">Invoices</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoiceButton />
      </div>
      <div className="mt-10 ">
        <InvoiceTableDesktop invoices={invoices} />
        <InvoiceTableMobile invoices={invoices} />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <TablePagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default async function InvoicePageWrapper() {
  return (
    <Suspense fallback={<InvoicesPageSkeleton />}>
      <InvoicePage />
    </Suspense>
  );
}
