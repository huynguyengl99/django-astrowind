import type { PaginateFunction } from 'astro';
import setWith from 'lodash.setwith';

import { getCollection } from 'astro:content';
import { APP_BLOG } from 'astrowind:config';

import memoize from 'lodash.memoize';
import { type AWPostPage } from '~/types/content';
import type { AWLangPost } from '~/types/extend';
import { LANGUAGES } from './languages';

export const blogPostsPerPage = APP_BLOG?.postsPerPage;

export const blogListRobots = APP_BLOG.list.robots;

const fetchPostPage = async (lang) => {
  const postPages = await getCollection('auto-postPage', (item) => item.id.includes(lang));

  return postPages[0].data;
};

const getPublishDateOrNow = (obj) => {
  return obj.publishDate ? new Date(obj.publishDate) : new Date();
};

const fetchPosts = async () => {
  const postCollection = await getCollection('auto-posts');

  const postsWithLang = postCollection.map((item) => {
    const lang = item.id.split('/')[0];
    const data = item.data;
    return {
      ...data,
      lang,
    };
  });

  const res = postsWithLang
    .sort((a, b) => getPublishDateOrNow(b).valueOf() - getPublishDateOrNow(a).valueOf())
    .filter((post) => !post.draft);

  return res;
};

export const getPostPage: (lang: string) => Promise<AWPostPage> = memoize(fetchPostPage);
export const getPosts: () => Promise<Array<AWLangPost>> = memoize(fetchPosts);
export const getPostsByLang: (lang) => Promise<Array<AWLangPost>> = memoize(async (lang) => {
  const posts = await getPosts();
  return posts.filter((item) => item.lang === lang);
});

export const getPaginatedPosts = async ({ paginate }: { paginate: PaginateFunction }) => {
  const pagination = await Promise.all(
    LANGUAGES.map(async (lang) => {
      return paginate(await getPostsByLang(lang), {
        pageSize: blogPostsPerPage,
        params: {
          lang,
        },
      });
    })
  );

  return pagination.flat();
};

export const getPaginatedCategories = async ({ paginate }: { paginate: PaginateFunction }) => {
  const categoryCollection = await getCollection('auto-categories');
  const allCategories = categoryCollection.map((item) => {
    const lang = item.id.split('/')[0];

    return {
      ...item.data,
      lang,
    };
  });

  const allSlugMapping = {};
  allCategories.forEach((item) => {
    setWith(allSlugMapping, [item.id, item.lang], item.slug, Object);
  });

  const pagination = await Promise.all(
    LANGUAGES.map(async (lang) => {
      const postsByLang = await getPostsByLang(lang);
      const categoriesByLang = allCategories.filter((item) => item.lang === lang);

      return categoriesByLang
        .map((category) => {
          const postsByCategory = postsByLang.filter((item) => item.category?.id === category.id);
          return paginate(postsByCategory, {
            pageSize: blogPostsPerPage,
            props: {
              slugMapping: allSlugMapping[category.id || ''],
              categoryTitle: category.title,
            },
            params: {
              lang,
              category: category.slug || '',
            },
          });
        })
        .flat();
    })
  );

  return pagination.flat();
};

export const getPaginatedTags = async ({ paginate }: { paginate: PaginateFunction }) => {
  const tagCollection = await getCollection('auto-tags');
  const allTags = tagCollection.map((item) => {
    const lang = item.id.split('/')[0];

    return {
      ...item.data,
      lang,
    };
  });

  const allSlugMapping = {};
  allTags.forEach((item) => {
    setWith(allSlugMapping, [item.id, item.lang], item.slug, Object);
  });

  const pagination = await Promise.all(
    LANGUAGES.map(async (lang) => {
      const postsByLang = await getPostsByLang(lang);
      const tagsByLang = allTags.filter((item) => item.lang === lang);

      return tagsByLang
        .map((tag) => {
          const postsByTag = postsByLang.filter((item) => item.tags?.map((item) => item.id).includes(tag.id));
          return paginate(postsByTag, {
            pageSize: blogPostsPerPage,
            props: {
              slugMapping: allSlugMapping[tag.id || ''],
              tagTitle: tag.title,
            },
            params: {
              lang,
              tag: tag.slug || '',
            },
          });
        })
        .flat();
    })
  );

  return pagination.flat();
};
