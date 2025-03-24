import {
  fetchCustomersPages,
  fetchFilteredCustomers,
} from "@/app/lib/actions/customerActions";
import { Metadata } from "next";
import CustomerTableDesktop from "@/components/customers/customers-table-desktop";
import CustomerTableMobile from "@/components/customers/customers-table-mobile";
import CustomerTableSkeleton from "@/components/skeletons/customer-table-skeleton";
import { Suspense } from "react";
import Search from "@/components/search";
import TablePagination from "@/components/invoices/table-pagination";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function CustomersPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const [totalPages, customers] = await Promise.all([
    fetchCustomersPages(query),
    fetchFilteredCustomers(query, currentPage),
  ]);
  return (
    <div className="w-full">
      <h1 className="mb-4 font-bold text-xl md:text-2xl">Customers List</h1>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>
      <div className="mt-10">
        <Suspense fallback={<CustomerTableSkeleton />}>
          <CustomerTableDesktop customers={customers} />
          <CustomerTableMobile customers={customers} />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <TablePagination totalPages={totalPages} />
      </div>
    </div>
  );
}
