import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const AWImage = z
  .object({ id: z.number().int(), src: z.string().nullable(), alt: z.string().nullable() })
  .partial()
  .passthrough();
const VariantEnum = z.enum(['primary', 'secondary', 'tertiary', 'link']);
const AWAction = z
  .object({
    id: z.number().int(),
    variant: VariantEnum,
    target: z.string(),
    text: z.string().nullable(),
    href: z.string(),
    icon: z.string(),
  })
  .partial()
  .passthrough();
const AWHero = z
  .object({
    id: z.number().int(),
    image: AWImage.nullable(),
    actions: z.array(AWAction).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    content: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWStatItem = z
  .object({ id: z.number().int(), title: z.string().nullable(), amount: z.string().nullable(), icon: z.string() })
  .partial()
  .passthrough();
const AWStat = z
  .object({
    id: z.number().int(),
    stats: z.array(AWStatItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
  })
  .partial()
  .passthrough();
const AWItem = z
  .object({ id: z.number().int(), title: z.string().nullable(), description: z.string().nullable(), icon: z.string() })
  .partial()
  .passthrough();
const AWFeature3 = z
  .object({
    id: z.number().int(),
    items: z.array(AWItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    columns: z.number().int().gte(-2147483648).lte(2147483647),
    defaultIcon: z.string(),
    isBeforeContent: z.boolean(),
    isAfterContent: z.boolean(),
  })
  .partial()
  .passthrough();
const AWStep2 = z
  .object({
    id: z.number().int(),
    callToAction: AWAction.nullable(),
    items: z.array(AWItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    isReversed: z.boolean(),
  })
  .partial()
  .passthrough();
const AWFeature2 = z
  .object({
    id: z.number().int(),
    items: z.array(AWItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    defaultIcon: z.string(),
    columns: z.number().int().gte(-2147483648).lte(2147483647),
  })
  .partial()
  .passthrough();
const AWAboutPage = z
  .object({
    id: z.number().int(),
    hero: AWHero.nullable(),
    stat: AWStat.nullable(),
    feature3s: z.array(AWFeature3).nullable(),
    step2s: z.array(AWStep2).nullable(),
    feature2s: z.array(AWFeature2).nullable(),
    hash: z.string().nullable(),
    title: z.string().nullable(),
  })
  .partial()
  .passthrough();
const HashModel = z.object({ id: z.number().int(), hash: z.string() }).partial().passthrough();
const AWHeroText = z
  .object({
    id: z.number().int(),
    callToAction: AWAction.nullable(),
    callToAction2: AWAction.nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    content: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWTextArea = z
  .object({
    id: z.number().int(),
    name: z.string(),
    label: z.string().nullable(),
    rows: z.number().int().gte(-2147483648).lte(2147483647),
    placeholder: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWDisclaimer = z.object({ id: z.number().int(), label: z.string().nullable() }).partial().passthrough();
const AWInput = z
  .object({
    id: z.number().int().optional(),
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
    textarea: AWTextArea.nullable(),
    disclaimer: AWDisclaimer.nullable(),
    inputs: z.array(AWInput).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    button: z.string().nullable(),
    description: z.string().nullable(),
    submitUrl: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWContactPage = z
  .object({
    id: z.number().int(),
    heroText: AWHeroText.nullable(),
    contactUs: AWContact.nullable(),
    feature2: AWFeature2.nullable(),
    hash: z.string().nullable(),
    title: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWFeature = z
  .object({
    id: z.number().int(),
    items: z.array(AWItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    defaultIcon: z.string(),
    columns: z.number().int().gte(-2147483648).lte(2147483647),
  })
  .partial()
  .passthrough();
const AWStep = z
  .object({
    id: z.number().int(),
    image: AWImage.nullable(),
    items: z.array(AWItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    isReversed: z.boolean(),
  })
  .partial()
  .passthrough();
const AWFaq = z
  .object({
    id: z.number().int(),
    items: z.array(AWItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
    columns: z.number().int().gte(-2147483648).lte(2147483647),
  })
  .partial()
  .passthrough();
const AWCallToAction = z
  .object({
    id: z.number().int(),
    actions: z.array(AWAction).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWContent = z
  .object({
    id: z.number().int().optional(),
    callToAction: AWAction.nullish(),
    image: AWImage.nullish(),
    items: z.array(AWItem).nullish(),
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
    hero: AWHero.nullable(),
    feature: AWFeature.nullable(),
    feature2: AWFeature2.nullable(),
    step: AWStep.nullable(),
    faq: AWFaq.nullable(),
    stat: AWStat.nullable(),
    cta: AWCallToAction.nullable(),
    contents: z.array(AWContent).nullable(),
    hash: z.string().nullable(),
    title: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWPostPage = z
  .object({
    id: z.number().int(),
    hash: z.string().nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagText: z.string().nullable(),
    categoryText: z.string().nullable(),
    pageText: z.string().nullable(),
    blogText: z.string().nullable(),
    backToBlogText: z.string().nullable(),
    postsByTagText: z.string().nullable(),
    relatedPostsText: z.string().nullable(),
    viewAllPostsText: z.string().nullable(),
    prevText: z.string().nullable(),
    nextText: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWCategory = z
  .object({
    id: z.number().int(),
    hash: z.string().nullable(),
    title: z.string().nullable(),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .nullable(),
  })
  .partial()
  .passthrough();
const RelatedPostImage = z
  .object({ id: z.number().int(), src: z.string().nullable(), alt: z.string().nullable() })
  .partial()
  .passthrough();
const RelatedPost = z
  .object({
    id: z.number().int().optional(),
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
const AWPostImage = z
  .object({ id: z.number().int(), src: z.string().nullable(), alt: z.string().nullable() })
  .partial()
  .passthrough();
const AWMetadataRobot = z
  .object({ id: z.number().int(), index: z.boolean(), follow: z.boolean() })
  .partial()
  .passthrough();
const AWMetadataImage = z
  .object({
    id: z.number().int(),
    url: z.string().nullable(),
    width: z.number().int().gte(-2147483648).lte(2147483647),
    height: z.number().int().gte(-2147483648).lte(2147483647),
  })
  .partial()
  .passthrough();
const AWMetaDataOpenGraph = z
  .object({
    id: z.number().int(),
    images: z.array(AWMetadataImage).nullable(),
    url: z.string().nullable(),
    siteName: z.string().nullable(),
    locale: z.string().nullable(),
    type: z.string(),
  })
  .partial()
  .passthrough();
const AWMetaDataTwitter = z
  .object({
    id: z.number().int(),
    handle: z.string().nullable(),
    site: z.string().nullable(),
    cardType: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWMetadata = z
  .object({
    id: z.number().int(),
    robots: AWMetadataRobot.nullable(),
    openGraph: AWMetaDataOpenGraph.nullable(),
    twitter: AWMetaDataTwitter.nullable(),
    title: z.string().nullable(),
    titleTemplate: z.string().nullable(),
    description: z.string().nullable(),
    canonical: z.string().nullable(),
    ignoreTitleTemplate: z.boolean(),
  })
  .partial()
  .passthrough();
const AWPostTag = z
  .object({
    id: z.number().int(),
    title: z.string().nullable(),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .nullable(),
  })
  .partial()
  .passthrough();
const AWPost = z
  .object({
    id: z.number().int(),
    relatedPosts: z.array(RelatedPost),
    image: AWPostImage.nullable(),
    category: AWCategory.nullable(),
    metadata: AWMetadata.nullable(),
    tags: z.array(AWPostTag).nullable(),
    hash: z.string().nullable(),
    title: z.string().nullable(),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .nullable(),
    excerpt: z.string().nullable(),
    draft: z.boolean(),
    author: z.string().nullable(),
    content: z.string().nullable(),
    publishDate: z.string().datetime({ offset: true }).nullable(),
    createdDate: z.string().datetime({ offset: true }),
  })
  .partial()
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
    callToAction: AWAction.nullable(),
    items: z.array(AWItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    price: z.string().nullable(),
    period: z.string().nullable(),
    hasRibbon: z.boolean(),
    ribbonTitle: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWPricing = z
  .object({
    id: z.number().int(),
    prices: z.array(AWPriceItem).nullable(),
    title: z.string().nullable(),
    subtitle: z.string().nullable(),
    tagline: z.string().nullable(),
    htmlId: z.string(),
  })
  .partial()
  .passthrough();
const AWPricingPage = z
  .object({
    id: z.number().int(),
    heroText: AWHeroText.nullable(),
    prices: AWPricing.nullable(),
    feature3: AWFeature3.nullable(),
    step: AWStep.nullable(),
    faq: AWFaq.nullable(),
    cta: AWCallToAction.nullable(),
    hash: z.string().nullable(),
    title: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWHeaderLink = z
  .object({
    id: z.number().int(),
    text: z.string().nullable(),
    href: z.string(),
    ariaLabel: z.string().nullable(),
    icon: z.string(),
    links: z.array(z.number()),
  })
  .partial()
  .passthrough();
const AWHeader = z
  .object({ id: z.number().int(), links: z.array(AWHeaderLink).nullable(), actions: z.array(AWAction).nullable() })
  .partial()
  .passthrough();
const AWFooterLinkItem = z
  .object({
    id: z.number().int(),
    text: z.string().nullable(),
    href: z.string(),
    ariaLabel: z.string().nullable(),
    icon: z.string(),
  })
  .partial()
  .passthrough();
const AWFooterLink = z
  .object({ id: z.number().int(), links: z.array(AWFooterLinkItem).nullable(), title: z.string().nullable() })
  .partial()
  .passthrough();
const AWFooter = z
  .object({
    id: z.number().int(),
    links: z.array(AWFooterLink).nullable(),
    secondaryLinks: z.array(AWFooterLink).nullable(),
    socialLinks: z.array(AWFooterLink).nullable(),
    footNote: z.string().nullable(),
  })
  .partial()
  .passthrough();
const AWSite = z
  .object({
    id: z.number().int(),
    header: AWHeader.nullable(),
    footer: AWFooter.nullable(),
    defaultMetadata: AWMetadata.nullable(),
    hash: z.string().nullable(),
    announcement: z.string().nullable(),
    philosophyText: z.string().nullable(),
    philosophy: z.string().nullable(),
  })
  .partial()
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
  HashModel,
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
    path: '/api/aw/about/hash/',
    alias: 'aboutHashRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: HashModel,
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
    path: '/api/aw/contact/hash/',
    alias: 'contactHashRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: HashModel,
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
    path: '/api/aw/index/hash/',
    alias: 'indexHashRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: HashModel,
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
    path: '/api/aw/post-page/hash/',
    alias: 'postPageHashRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: HashModel,
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
    path: '/api/aw/posts/categories/hash/',
    alias: 'postsCategoriesHashList',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: z.array(HashModel),
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
        name: 'id',
        type: 'Query',
        schema: z.array(z.number()).optional(),
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
    path: '/api/aw/posts/posts/hash/',
    alias: 'postsPostsHashList',
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
        name: 'id',
        type: 'Query',
        schema: z.array(z.number()).optional(),
      },
      {
        name: 'tag',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.array(HashModel),
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
    path: '/api/aw/posts/tags/hash/',
    alias: 'postsTagsHashList',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: z.array(HashModel),
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
    path: '/api/aw/pricing/hash/',
    alias: 'pricingHashRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: HashModel,
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
  {
    method: 'get',
    path: '/api/aw/site/hash/',
    alias: 'siteHashRetrieve',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accept-language',
        type: 'Header',
        schema: z.string().optional(),
      },
    ],
    response: HashModel,
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
