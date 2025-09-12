import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    tech: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    image: z.string().optional(),
    publishDate: z.date().optional(),
  }),
});

export const collections = { projects };
