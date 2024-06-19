const autoFolders = [
  'auto-posts',
  'auto-categories',
  'auto-tags',
  'auto-indexPage',
  'auto-contactPage',
  'auto-pricingPage',
  'auto-postPage',
  'auto-aboutPage',
  'auto-site',
];

const contentFolders = autoFolders.map((item) => `./src/content/${item}`);
const folderToCache = ['./astro-cache', '.hashes', ...contentFolders];

module.exports = {
  async onPreBuild({ utils }) {
    await utils.cache.restore(folderToCache);
  },
  async onPostBuild({ utils }) {
    await utils.cache.save(folderToCache);
  },
};
