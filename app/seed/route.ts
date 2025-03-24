/* eslint-disable @typescript-eslint/no-unused-vars */
import postgres from "postgres";
import {
  countrySalesData,
  customers,
  invoices,
  refundData,
  revenue,
  users,
} from "../lib/utils/mockData";
import { hash } from "bcrypt";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedUsers() {
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedInvoices() {
  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => sql`
      INSERT INTO invoices (num, customer_id, amount, status, date)
        VALUES (${invoice.num}, ${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (num) DO NOTHING;
      `
    )
  );

  return insertedInvoices;
}

async function seedCustomers() {
  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCustomers;
}

async function seedRevenue() {
  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => sql`
        INSERT INTO revenue (month_name, month_number, revenue)
        VALUES (${rev.month_name}, ${rev.month_number}, ${rev.revenue})
        ON CONFLICT (month_name) DO NOTHING;
      `
    )
  );

  return insertedRevenue;
}

async function seedRefund() {
  const insertedRefundList = await Promise.all(
    refundData.map(
      (rev) =>
        sql`
          INSERT INTO refund (reason, total, fullMark)
          VALUES (${rev.reason}, ${rev.total}, ${rev.fullMark})
          ON CONFLICT (reason) DO NOTHING;
        `
    )
  );
  return insertedRefundList;
}

async function seedCountry() {
  const insertedCountrySales = await Promise.all(
    countrySalesData.map(
      (rev) =>
        sql`
          INSERT INTO country (region, sales)
          VALUES (${rev.region}, ${rev.sales})
          ON CONFLICT (region) DO NOTHING;
        `
    )
  );
  return insertedCountrySales;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedCustomers(),
      seedInvoices(),
      seedRevenue(),
      seedRefund(),
      seedCountry(),
    ]);
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
