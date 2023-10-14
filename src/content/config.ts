import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: ({ image }) =>  z.object({
		inProgress: z.boolean(),
		title: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		img_alt: z.string().optional(),
		img: image().optional()
	}),
});

export const collections = {
	projects: projectsCollection,
};
