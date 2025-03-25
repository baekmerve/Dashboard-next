import { Suspense } from "react";
import CardListSkeleton from "@/components/skeletons/cardList-skeleton";
import CardWrapper from "@/components/dashboard/card-wrapper";
import LatestInvoices from "@/components/dashboard/latest-invoices";
import LatestInvoicesSkeleton from "@/components/skeletons/latest-invoices-skeleton";

import RevenueCard from "@/components/dashboard/revenue";
import RefundCard from "@/components/dashboard/refund";
import CountryCard from "@/components/dashboard/country";
import CommonChartSkeleton from "@/components/skeletons/common-chart-skeleton";

export default function Home() {
  return (
    <main>
      <h1 className="mb-4 font-bold text-xl md:text-2xl">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Suspense fallback={<CardListSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<CommonChartSkeleton title="Monthly Revenue" />}>
          <RevenueCard />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<CommonChartSkeleton title="Refund Reasons" />}>
          <RefundCard />
        </Suspense>
        <Suspense fallback={<CommonChartSkeleton title="Sales by Country" />}>
          <CountryCard />
        </Suspense>
      </div>
    </main>
  );
}
