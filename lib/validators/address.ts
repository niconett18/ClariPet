import { z } from "zod";

export const addressSchema = z.object({
  label: z.string().min(1).max(50), // e.g., "Home", "Office"
  full_name: z.string().min(1).max(100),
  phone: z.string().min(8).max(20),
  street: z.string().min(1).max(300),
  city: z.string().min(1).max(100),
  province: z.string().min(1).max(100),
  postal_code: z.string().min(4).max(10),
  is_default: z.boolean().default(false),
});

export const updateAddressSchema = addressSchema.partial();

export type AddressInput = z.infer<typeof addressSchema>;
export type UpdateAddressInput = z.infer<typeof updateAddressSchema>;
