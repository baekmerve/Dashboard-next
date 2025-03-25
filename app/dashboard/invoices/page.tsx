import { Suspense } from "react";
import { Metadata } from "next";
import CreateInvoiceButton from "@/components/invoices/create-invoice-button";
import Search from "@/components/search";
import { InvoicesPageSkeleton } from "@/components/skeletons/invoice-page-skeleton";
import InvoiceContent from "./invoice-content";
export const metadata: Metadata = {
  title: "Invoices",
};

export default async function InvoicePage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <h1 className="mb-4 font-bold text-xl md:text-2xl">Invoices</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoiceButton />
      </div>
      <Suspense fallback={<InvoicesPageSkeleton />}>
        <InvoiceContent query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
