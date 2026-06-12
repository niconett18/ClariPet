import { z } from "zod";

export const updateProfileSchema = z.object({
  full_name: z.string().min(1).max(100),
  phone: z.string().min(8).max(20).or(z.literal("")).nullable().optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
