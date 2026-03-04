import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.string(),
    excerpt: z.string().optional(),
  }),
});

const campaigns = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    supporters: z.string().optional(),
    petitionUrl: z.string().optional(),
    emoji: z.string().optional(),
    featured: z.boolean().optional(),
    order: z.number().optional().default(99),
    status: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { blog, campaigns };
