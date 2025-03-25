import { Metadata } from "next";
import { Suspense } from "react";
import Search from "@/components/search";
import CustomerPageSkeleton from "@/components/skeletons/customer-page-skeleton";
import CustomerContent from "./customer-content";


export const metadata: Metadata = {
  title: "Customers",
};

export default async function CustomerPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <h1 className="mb-4 font-bold text-xl md:text-2xl">Customers List</h1>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>

      <Suspense fallback={<CustomerPageSkeleton />}>
        <CustomerContent query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
