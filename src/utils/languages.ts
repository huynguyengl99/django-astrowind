import isEmpty from 'lodash/isEmpty';
import type { LanguageAlternate } from '~/types';

export const DEFAULT_LANG = 'en';

// Uncomment the below to choose your desired languages

export const LANGUAGE_MAP = {
  en: 'English',
  // af: 'Afrikaans',
  ar: 'العربية',
  // bg: 'Български',
  // bn: 'বাংলা',
  // ca: 'Català',
  // cs: 'Čeština',
  // da: 'Dansk',
  // de: 'Deutsch',
  // el: 'Ελληνικά',
  // es: 'Español',
  // eu: 'Euskara',
  // fi: 'Suomi',
  // fr: 'Français',
  // gl: 'Galego',
  // he: 'עברית',
  // hi: 'हिन्दी',
  // hu: 'Magyar',
  // id: 'Bahasa Indonesia',
  // is: 'Íslenska',
  // it: 'Italiano',
  // ja: '日本語',
  // kn: 'ಕನ್ನಡ',
  // ko: '한국어',
  // lt: 'Lietuvių',
  // lv: 'Latviešu',
  // ml: 'മലയാളം',
  // mr: 'मराठी',
  // ms: 'Bahasa Melayu',
  // nb: 'Norsk bokmål',
  // nl: 'Nederlands',
  // pa: 'ਪੰਜਾਬੀ',
  // pl: 'Polski',
  // pt: 'Português',
  // ro: 'Română',
  // ru: 'Русский',
  // sk: 'Slovenčina',
  // sr: 'Српски',
  // sv: 'Svenska',
  // ta: 'தமிழ்',
  // te: 'తెలుగు',
  // th: 'ไทย',
  // tr: 'Türkçe',
  // uk: 'Українська',
  vi: 'Tiếng Việt',
  zh: '中文',
};

export const LANGUAGES = Object.keys(LANGUAGE_MAP);

export const LANGUAGE_PATHS = LANGUAGES.map((lang) => ({ params: { lang } }));

export const buildLanguageAlternates = (url: string | URL, currentLang: string = '', slugMapping?: object) => {
  const alternates: LanguageAlternate[] = [];
  LANGUAGES.forEach((lang) => {
    if (lang === currentLang) {
      alternates.push({ hrefLang: lang, href: String(url) });
      return;
    }
    const curLangPath = new RegExp('^/' + currentLang + '(?=(/|$))');
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    let newPath = pathname.replace(curLangPath, `/${lang}`);

    if (slugMapping && !isEmpty(slugMapping)) {
      const currentSlug = slugMapping[currentLang];
      const newSlug = slugMapping[lang];
      newPath = newPath.replace(currentSlug, newSlug);
    }
    urlObj.pathname = newPath;
    alternates.push({ hrefLang: lang, href: urlObj.href });
  });
  return alternates;
};
