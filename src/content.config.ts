import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    startDate: z.string(), // "Sept. 2023" format as seen in the website
    endDate: z.string(), // "Presente" or "Sept. 2023"
    technologies: z.array(z.string()),
  }),
});

export const collections = {
  experience: experienceCollection,
};
