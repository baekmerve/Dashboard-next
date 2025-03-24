import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function CustomerTableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <Table>
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
        {Array.from({ length: rows }).map((_, index) => (
          <TableRow key={index}>
            {/* Customer Name and Image */}
            <TableCell>
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-6 w-24 rounded" />
              </div>
            </TableCell>
            {/* Email */}
            <TableCell>
              <Skeleton className="h-6 w-32 rounded" />
            </TableCell>
            {/* Amount */}
            <TableCell>
              <Skeleton className="h-6 w-16 rounded" />
            </TableCell>
            {/* Date */}
            <TableCell>
              <Skeleton className="h-6 w-16 rounded" />
            </TableCell>
            {/* Status */}
            <TableCell>
              <Skeleton className="h-6 w-16 rounded" />
            </TableCell>
            {/* Actions */}
            <TableCell className="text-right">
              <div className="flex justify-end gap-3">
                <Skeleton className="h-[38px] w-[38px] rounded" />
                <Skeleton className="h-[38px] w-[38px] rounded" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
