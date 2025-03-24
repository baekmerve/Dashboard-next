"use server";

import postgres from "postgres";
import { CustomerField, CustomersTableType } from "../types/types";
import { formatCurrency } from "../utils/utils";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const ITEMS_PER_PAGE = 5;

export async function fetchCustomers() {
  try {
    const customers = await sql<CustomerField[]>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function fetchFilteredCustomers(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<CustomersTableType[]>`
		SELECT
		customers.id,
		customers.name,
		customers.email,
		customers.image_url,
		COUNT(invoices.id) AS total_invoices,
		SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	`;

    const customers = data.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch customer table.");
  }
}

export async function fetchCustomersPages(query: string) {
  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM customers
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of customers.");
  }
}

export async function fetchTotalUsers() {
  try {
    const result = await sql<
      { count: number }[]
    >`SELECT COUNT(*) FROM customers`;

    return result[0]?.count || 0; // Extracts the count value and ensures fallback to 0 if undefined
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of users.");
  }
}
