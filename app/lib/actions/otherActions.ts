"use server";
import postgres from "postgres";
import { CountrySales, Refund, Revenue } from "../types/types";
import { formatCurrency } from "../utils/utils";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchStatus() {
  try {
    const data = await sql<{ paid: number; pending: number }[]>`
      SELECT
        SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
        SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
      FROM invoices`;

    const totalPaidInvoices = formatCurrency(data[0]?.paid ?? 0);
    const totalPendingInvoices = formatCurrency(data[0]?.pending ?? 0);

    return {
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}



export async function fetchRevenue() {
  try {
    const data = await sql<Revenue[]>`SELECT * FROM revenue
    ORDER BY month_number ASC`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchRefund() {
  try {
    const data = await sql<Refund[]>`SELECT * FROM refund`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch refund data.");
  }
}

export async function fetchCountrySales() {
  try {
    const data = await sql<CountrySales[]>`SELECT * FROM country`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch CountrySales data.");
  }
}
