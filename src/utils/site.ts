import { getCollection } from 'astro:content';
import memoize from 'lodash.memoize';
import { type AWSite } from '~/types/content';

import { DEFAULT_LANG } from './languages';

const fetchSiteData = async (lang = DEFAULT_LANG) => {
  const indexPages = await getCollection('auto-site', (item) => item.id.includes(lang));
  return indexPages[0].data;
};

export const getSiteData: (lang?: string) => Promise<AWSite> = memoize(fetchSiteData);
