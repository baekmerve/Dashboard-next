import { z } from "zod";

export const InvoiceSchema = z.object({
  customerId: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Password must be at least 2 characters long." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

export const LoginSchema = RegisterSchema.omit({ name: true });
