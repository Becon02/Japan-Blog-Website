import { z, defineCollection } from "astro:content";

const journalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(), // "YYYY-MM-DD"
  }),
});

export const collections = {
  journal: journalCollection,
};
