import { z, defineCollection } from "astro:content";

const journalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // Automatically converts ISO string to Date
    timestamp: z.coerce.date(), // Same here
  }),
});

export const collections = {
  journal: journalCollection,
};
