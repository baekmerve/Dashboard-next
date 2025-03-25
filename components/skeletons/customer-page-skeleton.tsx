import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function CustomerPageSkeleton() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden md:col-span-4 bg-gray-50 p-4 border-2 rounded-xl mt-10">
      <div className="flex grow flex-col justify-between rounded-xl bg-white p-4 border">
        {/* mobile */}
        <div className="md:hidden space-y-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mb-2 w-full rounded-md bg-white p-4">
              <div className="flex items-center justify-between border-b border-gray-300 py-8">
                <div className="flex items-center">
                  <Skeleton className="mr-2 h-8 w-8 rounded-full bg-gray-300" />
                  <Skeleton className="h-6 w-16 rounded-md bg-gray-300" />
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4 border-b pb-5">
                <div>
                  <Skeleton className="h-6 w-16 rounded-md bg-gray-300" />
                  <Skeleton className="mt-2 h-6 w-24 rounded-md bg-gray-300" />
                </div>
                <div>
                  <Skeleton className="h-6 w-16 rounded-md bg-gray-300" />
                  <Skeleton className="mt-2 h-6 w-24 rounded-md bg-gray-300" />
                </div>
              </div>
              <Skeleton className="mt-4 h-6 w-16 rounded-md" />
            </div>
          ))}
        </div>
        <Table className="hidden md:table">
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
            {[...Array(6)].map((_, index) => (
              <TableRow key={index}>
                {/* Customer Name and Image */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-full bg-gray-300" />
                    <Skeleton className="h-6 w-24 rounded bg-gray-300" />
                  </div>
                </TableCell>
                {/* Email */}
                <TableCell>
                  <Skeleton className="h-6 w-32 rounded bg-gray-300" />
                </TableCell>
                {/* Total Invoices */}
                <TableCell>
                  <Skeleton className="h-6 w-16 rounded bg-gray-300" />
                </TableCell>
                {/* Total Pending */}
                <TableCell>
                  <Skeleton className="h-6 w-16 rounded bg-gray-300" />
                </TableCell>
                {/* Total Paid */}
                <TableCell>
                  <Skeleton className="h-6 w-16 rounded bg-gray-300" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
