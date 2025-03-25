import React from "react";

import RevenueSkeleton from "./customer-page-skeleton";
import LatestInvoicesSkeleton from "./latest-invoices-skeleton";
import CardListSkeleton from "./cardList-skeleton";

export default function DashboardSkeleton() {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardListSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueSkeleton />
        <LatestInvoicesSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}
