import { Skeleton } from "../ui/skeleton";

export default function LatestInvoicesSkeleton() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4 border">
        <Skeleton className="h-8 w-36 rounded-md bg-gray-200 mb-5" />
        <div className="bg-white px-6 rounded-md">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between py-4"
            >
              <div className="flex grow items-center gap-4 border-b border-gray-300">
                <Skeleton className="mr-2 size-10 rounded-full  bg-gray-200 " />
                <Skeleton className="h-4 w-30 rounded-md bg-gray-200 " />
                <Skeleton className="h-4 w-52 rounded-md bg-gray-200 " />
                <Skeleton className="h-4 w-40 rounded-md bg-gray-200 " />
              </div>
              <Skeleton className=" h-4 w-12 rounded-md bg-gray-200 " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
