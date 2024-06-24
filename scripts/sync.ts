import { cmsApiClient } from '~/services/cms.service';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import { LANGUAGES } from '~/utils/languages';

const rootFolder = path.join(__dirname, '..');
const hashesFolder = path.join(rootFolder, '.hashes');
const contentFolder = path.join(rootFolder, 'src/content');
const autoFolder = 'auto';
const size = 20;
const debug = true;

fs.mkdirSync(hashesFolder, { recursive: true });

interface PaginationResults {
  next?: string;
  previous?: string;
  count: number;
  results: object[];
}

interface HashData {
  id: number;
  hash: string;
}

interface MappingValue {
  hashList: () => Promise<object | Array<HashData>>;
  dataList: () => Promise<object | Array<object>>;
  pagination?: boolean;
}

const mapping: Record<string, MappingValue> = {
  site: {
    hashList: cmsApiClient.siteHashRetrieve,
    dataList: cmsApiClient.siteRetrieve,
    pagination: false,
  },
  aboutPage: {
    hashList: cmsApiClient.aboutHashRetrieve,
    dataList: cmsApiClient.aboutRetrieve,
  },
  contactPage: {
    hashList: cmsApiClient.contactHashRetrieve,
    dataList: cmsApiClient.contactRetrieve,
  },
  indexPage: {
    hashList: cmsApiClient.indexHashRetrieve,
    dataList: cmsApiClient.indexRetrieve,
  },
  pricingPage: {
    hashList: cmsApiClient.pricingHashRetrieve,
    dataList: cmsApiClient.pricingRetrieve,
  },
  postPage: {
    hashList: cmsApiClient.postPageHashRetrieve,
    dataList: cmsApiClient.postPageRetrieve,
  },
  posts: {
    hashList: cmsApiClient.postsPostsHashList,
    dataList: cmsApiClient.postsPostsList,
    pagination: true,
  },
  categories: {
    hashList: cmsApiClient.postsCategoriesHashList,
    dataList: cmsApiClient.postsCategoriesList,
  },
  tags: {
    hashList: cmsApiClient.postsTagsHashList,
    dataList: cmsApiClient.postsTagsList,
  },
};

const writeJsonFile = (filePath: string, data: object) => {
  debug && console.log(`\nWrite to file ${filePath}`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

const fetchByLang = async (fetchFn, { pagination = false, lang, queries = {} }) => {
  if (!pagination) {
    return await fetchFn({ headers: { 'accept-language': lang }, queries });
  }

  const results: object[] = [];
  let page = 1;

  while (page > 0) {
    const data: PaginationResults = await fetchFn({
      headers: { 'accept-language': lang },
      queries: { ...queries, page, size },
    });

    results.push(...data.results);
    page = data.next ? page + 1 : 0;
  }

  return results;
};

const removeDeletedContentLangs = (contentAutoFolder: string, obsoleteLangs: string[]) => {
  obsoleteLangs.forEach((lang) => {
    const contentLangDir = path.join(contentAutoFolder, lang);
    fs.rmSync(contentLangDir, { recursive: true, force: true });
    debug && console.log(`\nRemoving obsolete folder: ${contentLangDir}`);
  });
};

const removeDeletedItems = (contentAutoFolder: string, ids: number[]) => {
  LANGUAGES.forEach((lang) => {
    const contentLangDir = path.join(contentAutoFolder, lang);
    ids.forEach((id) => {
      const filePath = path.join(contentLangDir, `${id}.json`);
      try {
        debug && console.log(`\nRemoving file ${filePath}`);
        fs.unlinkSync(filePath);
      } catch (error) {
        debug && console.log(`\nError while deleting ${filePath}: ${error}`);
      }
    });
  });
};

const processCollection = async (collection: string) => {
  const { hashList, dataList, pagination } = mapping[collection];
  const hashFilePath = path.join(hashesFolder, `${collection}.json`);
  const hashes = (await hashList()) as HashData[];

  const contentAutoFolder = path.join(contentFolder, `${autoFolder}-${collection}`);
  fs.mkdirSync(contentAutoFolder, { recursive: true });

  let oldHashes: HashData[] | null = null;
  if (fs.existsSync(hashFilePath)) {
    oldHashes = JSON.parse(fs.readFileSync(hashFilePath, 'utf-8')) as HashData[];
  }

  const addedIds = _.differenceWith(hashes, oldHashes || [], _.isEqual).map((item) => item.id);
  const removedIds = _.differenceWith(oldHashes || [], hashes, _.isEqual).map((item) => item.id);

  if (!_.isEmpty(removedIds)) {
    removeDeletedItems(contentAutoFolder, removedIds);
  }

  const allCurLangs = fs
    .readdirSync(contentAutoFolder, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const obsoleteLangs = _.difference(allCurLangs, LANGUAGES);
  removeDeletedContentLangs(contentAutoFolder, obsoleteLangs);

  if (_.isEqual(hashes, oldHashes)) return;

  writeJsonFile(hashFilePath, hashes);

  await Promise.all(
    LANGUAGES.map(async (lang) => {
      const contentLangDir = path.join(contentAutoFolder, lang);
      fs.mkdirSync(contentLangDir, { recursive: true });

      if (_.isArray(hashes)) {
        if (!_.isEmpty(addedIds)) {
          const data = await fetchByLang(dataList, { lang, pagination, queries: { id: addedIds } });
          data.forEach((item) => {
            const destPath = path.join(contentLangDir, `${item.id}.json`);
            writeJsonFile(destPath, item);
          });
        }
      } else {
        const data = await fetchByLang(dataList, { lang });
        const destPath = path.join(contentLangDir, `${data.id}.json`);
        writeJsonFile(destPath, data);
      }
    })
  );
};

const main = async () => {
  for (const collection in mapping) {
    await processCollection(collection);
  }
};

main();
