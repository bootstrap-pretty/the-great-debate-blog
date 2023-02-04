// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
    schema: z.object({
        pubDate: z.date(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).default(['others']),
        author: z.string(),
        draft: z.boolean().optional()
    })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'blog': blogCollection,
};
