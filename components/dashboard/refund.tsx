
import { Refund } from "@/app/lib/types/types";
import RefundChart from "./refund-chart";
import { fetchRefund } from "@/app/lib/actions/otherActions";


export default async function RefundCard() {
  const refundList:Refund[] = await fetchRefund();

  if (!refundList || refundList.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return <RefundChart refundList={refundList} />;
}
