import { APP_BLOG } from 'astrowind:config';

import memoize from 'lodash.memoize';
import { cmsApiClient } from '~/services/cms.service';
import { type AWPostPage } from '~/types/content';

export const blogListRobots = APP_BLOG.list.robots;

const fetchPostPage = async (lang) => {
  const postPageInLang = await cmsApiClient.postPageRetrieve({
    headers: { 'accept-language': lang },
  });
  return postPageInLang;
};

export const getPostPage: (lang: string) => Promise<AWPostPage> = memoize(fetchPostPage);
