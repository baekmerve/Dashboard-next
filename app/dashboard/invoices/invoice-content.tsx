import { fetchFilteredInvoices, fetchInvoicesPages } from "@/app/lib/actions/invoiceActions";
import InvoiceTableDesktop from "@/components/invoices/invoice-table-desktop";
import InvoiceTableMobile from "@/components/invoices/invoice-table-mobile";
import TablePagination from "@/components/invoices/table-pagination";


interface InvoiceContentProps {
  query: string;
  currentPage: number;
}

export default async function InvoiceContent({ query, currentPage }: InvoiceContentProps) {
  const [totalPages, invoices] = await Promise.all([
    fetchInvoicesPages(query),
    fetchFilteredInvoices(query, currentPage),
  ]);
  return (
    <>
      <div className="mt-10 ">
        <InvoiceTableDesktop invoices={invoices} />
        <InvoiceTableMobile invoices={invoices} />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <TablePagination totalPages={totalPages} />
      </div>
    </>
  );
}