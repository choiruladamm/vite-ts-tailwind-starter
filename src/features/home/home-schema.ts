// Schema for the home module
// Skema untuk modul home
// Import dan definisikan schema Zod sesuai kebutuhan
// Import and define the Zod schema as needed
import { z } from 'zod';

export const homeSchema = z.object({
  // contoh: id: z.string(),
  // example: id: z.string(),
});

export const homeResponseSchema = z.object({
  data: z.array(homeSchema),
});

export type HomeType = z.infer<typeof homeSchema>;
export type HomeResponseType = z.infer<typeof homeResponseSchema>;
