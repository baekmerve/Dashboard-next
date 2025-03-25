import { fetchCustomersPages, fetchFilteredCustomers } from "@/app/lib/actions/customerActions";
import CustomerTableDesktop from "@/components/customers/customers-table-desktop";
import CustomerTableMobile from "@/components/customers/customers-table-mobile";
import TablePagination from "@/components/invoices/table-pagination";

interface CustomerContentProps {
  query: string;
  currentPage: number;
}

export default async function CustomerContent({ query, currentPage }: CustomerContentProps) {
  const [totalPages, customers] = await Promise.all([
    fetchCustomersPages(query),
    fetchFilteredCustomers(query, currentPage),
  ]);
  return (
    <>
      <div className="mt-10">
        <CustomerTableDesktop customers={customers} />
        <CustomerTableMobile customers={customers} />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <TablePagination totalPages={totalPages} />
      </div>
    </>
  );
}