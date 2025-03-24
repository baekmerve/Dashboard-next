import { Skeleton } from "@/components/ui/skeleton";

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <Skeleton className="mr-2 h-8 w-8 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-md" />
        </div>
        <Skeleton className="h-6 w-16 rounded-md" />
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <Skeleton className="h-6 w-16 rounded-md" />
          <Skeleton className="mt-2 h-6 w-24 rounded-md" />
        </div>
        <div className="flex justify-end gap-2">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
      </div>
    </div>
  );
}
