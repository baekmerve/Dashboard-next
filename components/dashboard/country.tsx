import { fetchCountrySales } from "@/app/lib/actions/otherActions";
import { CountrySales } from "@/app/lib/types/types";
import CountrySalesChart from "./county-sales-chart";

export default async function CountryCard() {
  const countrySales: CountrySales[] = await fetchCountrySales();

  if (!countrySales || countrySales.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return <CountrySalesChart countrySales={countrySales} />;
}
