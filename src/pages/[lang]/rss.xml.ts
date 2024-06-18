import { getRssString } from '@astrojs/rss';

import { SITE, APP_BLOG } from 'astrowind:config';
import { getPostsByLang } from '~/utils/blog';
import { BLOG_BASE, getPermalink } from '~/utils/permalinks';

import { LANGUAGE_PATHS } from '~/utils/languages';
import { getSiteData } from '~/utils/site';
import type { AWSite } from '~/types/content';

export function getStaticPaths() {
  return LANGUAGE_PATHS;
}

export const GET = async (context) => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }
  const lang = context.params.lang;

  const posts = await getPostsByLang(lang);

  const siteData: AWSite = await getSiteData(lang);
  const { defaultMetadata } = siteData;

  const rss = await getRssString({
    title: defaultMetadata?.title,
    description: defaultMetadata?.description || '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.slug, BLOG_BASE, lang),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash === 'never' ? false : true,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
