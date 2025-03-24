import { fetchRevenue } from "@/app/lib/actions/otherActions";


import { Revenue } from "@/app/lib/types/types";
import RevenueChart from "./revenue-chart";


export default async function RevenueCard() {
  const revenueList: Revenue[] = await fetchRevenue();


  if (!revenueList || revenueList.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return <RevenueChart revenueList={revenueList} />;
}
