import TableRowSkeleton from "./customer-table-skeleton";
import { InvoicesMobileSkeleton } from "./invoice-mobile-skeleton";

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden space-y-4">
            {[...Array(6)].map((_, index) => (
              <InvoicesMobileSkeleton key={index} />
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                {["Customer", "Email", "Amount", "Date", "Status", ""].map(
                  (header, index) => (
                    <th
                      key={index}
                      scope="col"
                      className={`px-3 py-5 font-medium ${
                        index === 0 ? "sm:pl-6" : ""
                      }`}
                    >
                      {header || <span className="sr-only">Edit</span>}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="bg-white">
              {[...Array(6)].map((_, index) => (
                <TableRowSkeleton key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
