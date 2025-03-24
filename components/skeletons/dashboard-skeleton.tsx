import React from "react";
import CardSkeleton from "./card-skeleton ";
import RevenueSkeleton from "./customer-table-skeleton";
import LatestInvoicesSkeleton from "./invoice-skeleton";

export default function DashboardSkeleton() {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}
