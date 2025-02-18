import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
  }),
});

export const collections = { blog };
