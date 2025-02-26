// Schema for the blog module
// Skema untuk modul blog
// Import dan definisikan schema Zod sesuai kebutuhan
// Import and define the Zod schema as needed
import { z } from 'zod';

export const blogSchema = z.object({
	// contoh: id: z.string(),
	// example: id: z.string(),
});

export const blogResponseSchema = z.object({
	data: z.array(blogSchema),
});

export type BlogType = z.infer<typeof blogSchema>;
export type BlogResponseType = z.infer<typeof blogResponseSchema>;
