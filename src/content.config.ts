import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
  schema: z.object({
    date: z.coerce.date(),
    // 内容の分類（日記・映画・読書など）。省略すると「日記」になります
    category: z.string().trim().default('日記'),
  }),
});

export const collections = { diary };
