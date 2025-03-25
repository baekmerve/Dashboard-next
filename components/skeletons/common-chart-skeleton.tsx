import { Skeleton } from "../ui/skeleton";

export default function CommonChartSkeleton({ title }: { title: string }) {
  return (
    <div className=" w-full overflow-hidden  bg-white p-4 md:col-span-4">
      <div className="flex gap-5 items-center mb-5">
        <Skeleton className="size-8 rounded-full " />
        <h1>{title}</h1>
      </div>

      <Skeleton className="w-full mt-0 h-[380px] rounded-md p-4 " />
    </div>
  );
}
