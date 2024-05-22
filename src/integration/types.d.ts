declare module 'astrowind:config' {
  import type { SiteConfig, MetaDataConfig, AppBlogConfig, UIConfig, AnalyticsConfig } from './config';

  export const SITE: SiteConfig;
  export const METADATA: MetaDataConfig;
  export const APP_BLOG: AppBlogConfig;
  export const UI: UIConfig;
  export const ANALYTICS: AnalyticsConfig;
}
