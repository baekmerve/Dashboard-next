import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchInvoiceById } from "@/app/lib/actions/invoiceActions";
import { fetchCustomers } from "@/app/lib/actions/customerActions";
import Breadcrumbs from "@/components/invoices/breadcrumbs";
import EditInvoiceForm from "@/components/forms/edit-invoice-form";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
}
