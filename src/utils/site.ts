import memoize from 'lodash.memoize';
import { cmsApiClient } from '~/services/cms.service';
import { type AWSite } from '~/types/content';

const fetchSiteData = async (lang) => {
  const siteDataInLang = await cmsApiClient.siteRetrieve({
    headers: { 'accept-language': lang },
  });
  return siteDataInLang;
};

export const getSiteData: (lang?: string) => Promise<AWSite> = memoize(fetchSiteData);
