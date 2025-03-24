import { Skeleton } from "../ui/skeleton";

export default function RevenueChartSkeleton() {
  return (
    <div className="relative w-full overflow-hidden md:col-span-4">
      <Skeleton className="mb-4 h-8 w-36 rounded-md" />
      <div className="rounded-xl bg-gray-100 p-4">
        <Skeleton className="sm:grid-cols-13 mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md p-4 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="ml-2 h-4 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}
