import { contentSchemas } from "~/schemas/content"
import { z } from "zod";

export type AWImage = z.infer<typeof contentSchemas.AWImage>;

export type VariantEnum = z.infer<typeof contentSchemas.VariantEnum>;

export type AWAction = z.infer<typeof contentSchemas.AWAction>;

export type AWHero = z.infer<typeof contentSchemas.AWHero>;

export type AWStatItem = z.infer<typeof contentSchemas.AWStatItem>;

export type AWStat = z.infer<typeof contentSchemas.AWStat>;

export type AWItem = z.infer<typeof contentSchemas.AWItem>;

export type AWFeature3 = z.infer<typeof contentSchemas.AWFeature3>;

export type AWStep2 = z.infer<typeof contentSchemas.AWStep2>;

export type AWFeature2 = z.infer<typeof contentSchemas.AWFeature2>;

export type AWAboutPage = z.infer<typeof contentSchemas.AWAboutPage>;

export type AWHeroText = z.infer<typeof contentSchemas.AWHeroText>;

export type AWTextArea = z.infer<typeof contentSchemas.AWTextArea>;

export type AWDisclaimer = z.infer<typeof contentSchemas.AWDisclaimer>;

export type AWInput = z.infer<typeof contentSchemas.AWInput>;

export type AWContact = z.infer<typeof contentSchemas.AWContact>;

export type AWContactPage = z.infer<typeof contentSchemas.AWContactPage>;

export type AWFeature = z.infer<typeof contentSchemas.AWFeature>;

export type AWStep = z.infer<typeof contentSchemas.AWStep>;

export type AWFaq = z.infer<typeof contentSchemas.AWFaq>;

export type AWCallToAction = z.infer<typeof contentSchemas.AWCallToAction>;

export type AWContent = z.infer<typeof contentSchemas.AWContent>;

export type AWIndexPage = z.infer<typeof contentSchemas.AWIndexPage>;

export type AWPostPage = z.infer<typeof contentSchemas.AWPostPage>;

export type AWCategory = z.infer<typeof contentSchemas.AWCategory>;

export type RelatedPostImage = z.infer<typeof contentSchemas.RelatedPostImage>;

export type RelatedPost = z.infer<typeof contentSchemas.RelatedPost>;

export type AWPostImage = z.infer<typeof contentSchemas.AWPostImage>;

export type AWMetadataRobot = z.infer<typeof contentSchemas.AWMetadataRobot>;

export type AWMetadataImage = z.infer<typeof contentSchemas.AWMetadataImage>;

export type AWMetaDataOpenGraph = z.infer<typeof contentSchemas.AWMetaDataOpenGraph>;

export type AWMetaDataTwitter = z.infer<typeof contentSchemas.AWMetaDataTwitter>;

export type AWMetadata = z.infer<typeof contentSchemas.AWMetadata>;

export type AWPostTag = z.infer<typeof contentSchemas.AWPostTag>;

export type AWPost = z.infer<typeof contentSchemas.AWPost>;

export type PaginatedAWPostList = z.infer<typeof contentSchemas.PaginatedAWPostList>;

export type AWPriceItem = z.infer<typeof contentSchemas.AWPriceItem>;

export type AWPricing = z.infer<typeof contentSchemas.AWPricing>;

export type AWPricingPage = z.infer<typeof contentSchemas.AWPricingPage>;

export type AWHeaderLink = z.infer<typeof contentSchemas.AWHeaderLink>;

export type AWHeader = z.infer<typeof contentSchemas.AWHeader>;

export type AWFooterLinkItem = z.infer<typeof contentSchemas.AWFooterLinkItem>;

export type AWFooterLink = z.infer<typeof contentSchemas.AWFooterLink>;

export type AWFooter = z.infer<typeof contentSchemas.AWFooter>;

export type AWSite = z.infer<typeof contentSchemas.AWSite>;

