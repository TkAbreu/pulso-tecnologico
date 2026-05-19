import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    category: z.enum(['EDI', 'Produtividade', 'Tecnologia']),
    tags: z.array(z.string()),
    author: z.string().default('Thiago Abreu'),
    readTime: z.number().default(5),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
