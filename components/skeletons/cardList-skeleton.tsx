import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function CardListSkeleton() {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <Card
          key={index}
          className="w-full overflow-hidden rounded-xl bg-white p-4 shadow-sm mx-auto"
        >
          <div className="flex items-center justify-between">
            <Skeleton className="h-7 w-30 rounded-md bg-gray-200" />
            <Skeleton className="ml-2 size-8 rounded-full text-sm  bg-gray-200" />
          </div>

          <Skeleton className="h-10 w-40 mt-5 bg-gray-200 rounded-md" />
        </Card>
      ))}
    </>
  );
}
