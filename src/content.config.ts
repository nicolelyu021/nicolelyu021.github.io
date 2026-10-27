import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const shared = {
  title: z.string(),
  description: z.string(),
  period: z.string(),
  eyebrow: z.string(),
  featured: z.boolean().default(false),
  order: z.number().int(),
};

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
  schema: z.object({
    ...shared,
    organization: z.string(),
    role: z.string(),
  }),
});

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.md' }),
  schema: z.object({
    ...shared,
    kind: z.enum(['Research', 'Project']),
    externalUrl: z.url().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { experience, research, blog };
