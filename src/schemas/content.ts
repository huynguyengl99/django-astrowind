import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const AWImage = z.object({ id: z.number().int(), src: z.string(), alt: z.string().nullish() }).passthrough();
const VariantEnum = z.enum(['primary', 'secondary', 'tertiary', 'link']);
const AWAction = z
  .object({
    id: z.number().int(),
    variant: VariantEnum.optional(),
    target: z.string().optional(),
    text: z.string().nullish(),
    href: z.string().optional(),
    icon: z.string().optional(),
  })
  .passthrough();
const AWHero = z
  .object({
    id: z.number().int(),
    image: AWImage,
    actions: z.array(AWAction),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    content: z.string().nullish(),
  })
  .passthrough();
const AWStatItem = z
  .object({
    id: z.number().int(),
    title: z.string().nullish(),
    amount: z.string().nullish(),
    icon: z.string().optional(),
  })
  .passthrough();
const AWStat = z
  .object({
    id: z.number().int(),
    stats: z.array(AWStatItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
  })
  .passthrough();
const AWItem = z
  .object({
    id: z.number().int(),
    title: z.string().nullish(),
    description: z.string().nullish(),
    icon: z.string().optional(),
  })
  .passthrough();
const AWFeature3 = z
  .object({
    id: z.number().int(),
    items: z.array(AWItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    columns: z.number().int().gte(-2147483648).lte(2147483647).optional(),
    defaultIcon: z.string().optional(),
    isBeforeContent: z.boolean().optional(),
    isAfterContent: z.boolean().optional(),
  })
  .passthrough();
const AWStep2 = z
  .object({
    id: z.number().int(),
    callToAction: AWAction,
    items: z.array(AWItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    isReversed: z.boolean().optional(),
  })
  .passthrough();
const AWFeature2 = z
  .object({
    id: z.number().int(),
    items: z.array(AWItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    defaultIcon: z.string().optional(),
    columns: z.number().int().gte(-2147483648).lte(2147483647).optional(),
  })
  .passthrough();
const AWAboutPage = z
  .object({
    id: z.number().int(),
    hero: AWHero,
    stat: AWStat,
    feature3s: z.array(AWFeature3),
    step2s: z.array(AWStep2),
    feature2s: z.array(AWFeature2),
    title: z.string().nullish(),
  })
  .passthrough();
const AWHeroText = z
  .object({
    id: z.number().int(),
    callToAction: AWAction,
    callToAction2: AWAction,
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    content: z.string().nullish(),
  })
  .passthrough();
const AWTextArea = z
  .object({
    id: z.number().int(),
    name: z.string().optional(),
    label: z.string().nullish(),
    rows: z.number().int().gte(-2147483648).lte(2147483647).optional(),
    placeholder: z.string().nullish(),
  })
  .passthrough();
const AWDisclaimer = z.object({ id: z.number().int(), label: z.string().nullish() }).passthrough();
const AWInput = z
  .object({
    id: z.number().int(),
    type: z.string().optional(),
    name: z.string(),
    label: z.string().nullish(),
    autocomplete: z.string().optional(),
    placeholder: z.string().nullish(),
  })
  .passthrough();
const AWContact = z
  .object({
    id: z.number().int(),
    textarea: AWTextArea,
    disclaimer: AWDisclaimer,
    inputs: z.array(AWInput),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    button: z.string().nullish(),
    description: z.string().nullish(),
    submitUrl: z.string().nullish(),
  })
  .passthrough();
const AWContactPage = z
  .object({
    id: z.number().int(),
    heroText: AWHeroText,
    contactUs: AWContact,
    feature2: AWFeature2,
    title: z.string().nullish(),
  })
  .passthrough();
const AWFeature = z
  .object({
    id: z.number().int(),
    items: z.array(AWItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    defaultIcon: z.string().optional(),
    columns: z.number().int().gte(-2147483648).lte(2147483647).optional(),
  })
  .passthrough();
const AWStep = z
  .object({
    id: z.number().int(),
    image: AWImage,
    items: z.array(AWItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    isReversed: z.boolean().optional(),
  })
  .passthrough();
const AWFaq = z
  .object({
    id: z.number().int(),
    items: z.array(AWItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    columns: z.number().int().gte(-2147483648).lte(2147483647).optional(),
  })
  .passthrough();
const AWCallToAction = z
  .object({
    id: z.number().int(),
    actions: z.array(AWAction),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
  })
  .passthrough();
const AWContent = z
  .object({
    id: z.number().int(),
    callToAction: AWAction,
    image: AWImage,
    items: z.array(AWItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
    content: z.string().nullish(),
    columns: z.number().int().gte(-2147483648).lte(2147483647),
    isReversed: z.boolean().optional(),
    isAfterContent: z.boolean().optional(),
  })
  .passthrough();
const AWIndexPage = z
  .object({
    id: z.number().int(),
    hero: AWHero,
    feature: AWFeature,
    feature2: AWFeature2,
    step: AWStep,
    faq: AWFaq,
    stat: AWStat,
    cta: AWCallToAction,
    contents: z.array(AWContent),
    title: z.string().nullish(),
  })
  .passthrough();
const AWPostPage = z
  .object({
    id: z.number().int(),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagText: z.string().nullish(),
    categoryText: z.string().nullish(),
    pageText: z.string().nullish(),
    blogText: z.string().nullish(),
    backToBlogText: z.string().nullish(),
    postsByTagText: z.string().nullish(),
    relatedPostsText: z.string().nullish(),
    viewAllPostsText: z.string().nullish(),
    prevText: z.string().nullish(),
    nextText: z.string().nullish(),
  })
  .passthrough();
const AWCategory = z
  .object({
    id: z.number().int(),
    title: z.string().nullish(),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .nullish(),
  })
  .passthrough();
const RelatedPostImage = z.object({ id: z.number().int(), src: z.string(), alt: z.string().nullish() }).passthrough();
const RelatedPost = z
  .object({
    id: z.number().int(),
    title: z.string().nullish(),
    excerpt: z.string().nullish(),
    author: z.string().nullish(),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .nullish(),
    image: RelatedPostImage,
  })
  .passthrough();
const AWPostImage = z.object({ id: z.number().int(), src: z.string(), alt: z.string().nullish() }).passthrough();
const AWMetadataRobot = z
  .object({ id: z.number().int(), index: z.boolean().optional(), follow: z.boolean().optional() })
  .passthrough();
const AWMetadataImage = z
  .object({
    id: z.number().int(),
    url: z.string().nullish(),
    width: z.number().int().gte(-2147483648).lte(2147483647).optional(),
    height: z.number().int().gte(-2147483648).lte(2147483647).optional(),
  })
  .passthrough();
const AWMetaDataOpenGraph = z
  .object({
    id: z.number().int(),
    images: z.array(AWMetadataImage),
    url: z.string().nullish(),
    siteName: z.string().nullish(),
    locale: z.string().nullish(),
    type: z.string().optional(),
  })
  .passthrough();
const AWMetaDataTwitter = z
  .object({
    id: z.number().int(),
    handle: z.string().nullish(),
    site: z.string().nullish(),
    cardType: z.string().nullish(),
  })
  .passthrough();
const AWMetadata = z
  .object({
    id: z.number().int(),
    robots: AWMetadataRobot,
    openGraph: AWMetaDataOpenGraph,
    twitter: AWMetaDataTwitter,
    title: z.string().nullish(),
    titleTemplate: z.string().nullish(),
    description: z.string().nullish(),
    canonical: z.string().nullish(),
    ignoreTitleTemplate: z.boolean().optional(),
  })
  .passthrough();
const AWPostTag = z
  .object({
    id: z.number().int(),
    title: z.string().nullish(),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .nullish(),
  })
  .passthrough();
const AWPost = z
  .object({
    id: z.number().int(),
    relatedPosts: z.array(RelatedPost),
    image: AWPostImage,
    category: AWCategory,
    metadata: AWMetadata,
    tags: z.array(AWPostTag),
    title: z.string().nullish(),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .nullish(),
    excerpt: z.string().nullish(),
    draft: z.boolean().optional(),
    author: z.string().nullish(),
    content: z.string().nullish(),
    publishDate: z.string().datetime({ offset: true }).nullish(),
    updatedDate: z.string().datetime({ offset: true }),
    createdDate: z.string().datetime({ offset: true }),
  })
  .passthrough();
const PaginatedAWPostList = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullish(),
    previous: z.string().url().nullish(),
    results: z.array(AWPost),
  })
  .passthrough();
const AWPriceItem = z
  .object({
    id: z.number().int(),
    callToAction: AWAction,
    items: z.array(AWItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    price: z.string().nullish(),
    period: z.string().nullish(),
    hasRibbon: z.boolean().optional(),
    ribbonTitle: z.string().nullish(),
  })
  .passthrough();
const AWPricing = z
  .object({
    id: z.number().int(),
    prices: z.array(AWPriceItem),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    tagline: z.string().nullish(),
    htmlId: z.string().optional(),
  })
  .passthrough();
const AWPricingPage = z
  .object({
    id: z.number().int(),
    heroText: AWHeroText,
    prices: AWPricing,
    feature3: AWFeature3,
    step: AWStep,
    faq: AWFaq,
    cta: AWCallToAction,
    title: z.string().nullish(),
  })
  .passthrough();
const AWHeaderLink = z
  .object({
    id: z.number().int(),
    text: z.string().nullish(),
    href: z.string().optional(),
    ariaLabel: z.string().nullish(),
    icon: z.string().optional(),
    links: z.array(z.number()),
  })
  .passthrough();
const AWHeader = z
  .object({ id: z.number().int(), links: z.array(AWHeaderLink), actions: z.array(AWAction) })
  .passthrough();
const AWFooterLinkItem = z
  .object({
    id: z.number().int(),
    text: z.string().nullish(),
    href: z.string().optional(),
    ariaLabel: z.string().nullish(),
    icon: z.string().optional(),
  })
  .passthrough();
const AWFooterLink = z
  .object({ id: z.number().int(), links: z.array(AWFooterLinkItem), title: z.string().nullish() })
  .passthrough();
const AWFooter = z
  .object({
    id: z.number().int(),
    links: z.array(AWFooterLink),
    secondaryLinks: z.array(AWFooterLink),
    socialLinks: z.array(AWFooterLink),
    footNote: z.string().nullish(),
  })
  .passthrough();
const AWSite = z
  .object({
    id: z.number().int(),
    header: AWHeader,
    footer: AWFooter,
    defaultMetadata: AWMetadata,
    announcement: z.string().nullish(),
    philosophyText: z.string().nullish(),
    philosophy: z.string().nullish(),
  })
  .passthrough();

export const contentSchemas = {
  AWImage,
  VariantEnum,
  AWAction,
  AWHero,
  AWStatItem,
  AWStat,
  AWItem,
  AWFeature3,
  AWStep2,
  AWFeature2,
  AWAboutPage,
  AWHeroText,
  AWTextArea,
  AWDisclaimer,
  AWInput,
  AWContact,
  AWContactPage,
  AWFeature,
  AWStep,
  AWFaq,
  AWCallToAction,
  AWContent,
  AWIndexPage,
  AWPostPage,
  AWCategory,
  RelatedPostImage,
  RelatedPost,
  AWPostImage,
  AWMetadataRobot,
  AWMetadataImage,
  AWMetaDataOpenGraph,
  AWMetaDataTwitter,
  AWMetadata,
  AWPostTag,
  AWPost,
  PaginatedAWPostList,
  AWPriceItem,
  AWPricing,
  AWPricingPage,
  AWHeaderLink,
  AWHeader,
  AWFooterLinkItem,
  AWFooterLink,
  AWFooter,
  AWSite,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/api/aw/about/',
    alias: 'aboutRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: AWAboutPage,
  },
  {
    method: 'get',
    path: '/api/aw/contact/',
    alias: 'contactRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: AWContactPage,
  },
  {
    method: 'get',
    path: '/api/aw/index/',
    alias: 'indexRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: AWIndexPage,
  },
  {
    method: 'get',
    path: '/api/aw/post-page/',
    alias: 'postPageRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: AWPostPage,
  },
  {
    method: 'get',
    path: '/api/aw/posts/categories/',
    alias: 'postsCategoriesList',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: z.array(AWCategory),
  },
  {
    method: 'get',
    path: '/api/aw/posts/categories/:id/',
    alias: 'postsCategoriesRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: AWCategory,
  },
  {
    method: 'get',
    path: '/api/aw/posts/posts/',
    alias: 'postsPostsList',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
      {
        name: 'category',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'page',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'size',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'tag',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: PaginatedAWPostList,
  },
  {
    method: 'get',
    path: '/api/aw/posts/posts/:id/',
    alias: 'postsPostsRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: AWPost,
  },
  {
    method: 'get',
    path: '/api/aw/posts/tags/',
    alias: 'postsTagsList',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: z.array(AWPostTag),
  },
  {
    method: 'get',
    path: '/api/aw/posts/tags/:id/',
    alias: 'postsTagsRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: AWPostTag,
  },
  {
    method: 'get',
    path: '/api/aw/pricing/',
    alias: 'pricingRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: AWPricingPage,
  },
  {
    method: 'get',
    path: '/api/aw/site/',
    alias: 'siteRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: AWSite,
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
