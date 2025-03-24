import { Skeleton } from "../ui/skeleton";

export default function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <Skeleton className="mr-2 h-8 w-8 rounded-full" />
        <div className="min-w-0">
          <Skeleton className="h-5 w-40 rounded-md" />
          <Skeleton className="mt-2 h-4 w-12 rounded-md" />
        </div>
      </div>
      <Skeleton className="mt-2 h-4 w-12 rounded-md" />
    </div>
  );
}


