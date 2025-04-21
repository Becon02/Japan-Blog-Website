import { z, defineCollection } from "astro:content";

const journalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // Automatically converts ISO string to Date
    timestamp: z.coerce.date(), // Same here
  }),
});

const galleryCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(), // filename of the image in /public/gallery
  }),
});


export const collections = {
  "journal_docs": journalCollection,
  "gallery_image_info": galleryCollection,
};
