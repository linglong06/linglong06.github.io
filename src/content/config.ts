import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    lang: z.enum(["en", "zh"]),
    affiliate: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
