import { defineCollection } from 'astro:content';
import { contentSchemas } from '~/schemas/content';

const postCollection = defineCollection({
  type: 'data',
  schema: contentSchemas.AWPost,
});

const indexPageCollection = defineCollection({
  type: 'data',
  schema: contentSchemas.AWIndexPage,
});

const aboutPageCollection = defineCollection({
  type: 'data',
  schema: contentSchemas.AWAboutPage,
});

const contactPageCollection = defineCollection({
  type: 'data',
  schema: contentSchemas.AWContactPage,
});

const pricingPageCollection = defineCollection({
  type: 'data',
  schema: contentSchemas.AWPricingPage,
});

const postPageCollection = defineCollection({
  type: 'data',
  schema: contentSchemas.AWPostPage,
});

const categoryCollection = defineCollection({
  type: 'data',
  schema: contentSchemas.AWCategory,
});

const tagCollection = defineCollection({
  type: 'data',
  schema: contentSchemas.AWPostTag,
});

export const collections = {
  'auto-posts': postCollection,
  'auto-categories': categoryCollection,
  'auto-tags': tagCollection,
  'auto-indexPage': indexPageCollection,
  'auto-contactPage': contactPageCollection,
  'auto-pricingPage': pricingPageCollection,
  'auto-postPage': postPageCollection,
  'auto-aboutPage': aboutPageCollection,
};
