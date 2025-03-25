import { Skeleton } from "../ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function InvoicesPageSkeleton() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden md:col-span-4 bg-white p-4 rounded-xl mt-10">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4 border-2">
        {/* mobile */}
        <div className="md:hidden space-y-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mb-2 w-full rounded-md bg-white p-4">
              <div className="flex items-center justify-between border-b border-gray-300 py-8">
                <div className="flex items-center">
                  <Skeleton className="mr-2 h-8 w-8 rounded-full bg-gray-300" />
                  <Skeleton className="h-6 w-16 rounded-md bg-gray-300" />
                </div>
                <Skeleton className="h-6 w-16 rounded-md bg-gray-300" />
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <Skeleton className="h-6 w-16 rounded-md bg-gray-300" />
                  <Skeleton className="mt-2 h-6 w-24 rounded-md bg-gray-300" />
                </div>
                <div className="flex justify-end gap-2">
                  <Skeleton className="h-10 w-10 rounded-md bg-gray-300" />
                  <Skeleton className="h-10 w-10 rounded-md bg-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Table className="hidden md:table">
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
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
                {/* Amount */}
                <TableCell>
                  <Skeleton className="h-6 w-16 rounded bg-gray-300" />
                </TableCell>
                {/* Date */}
                <TableCell>
                  <Skeleton className="h-6 w-16 rounded bg-gray-300" />
                </TableCell>
                {/* Status */}
                <TableCell>
                  <Skeleton className="h-6 w-16 rounded bg-gray-300" />
                </TableCell>
                {/* Actions */}
                <TableCell className="text-right">
                  <div className="flex justify-end gap-3">
                    <Skeleton className="h-[38px] w-[38px] rounded bg-gray-300" />
                    <Skeleton className="h-[38px] w-[38px] rounded bg-gray-300" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
