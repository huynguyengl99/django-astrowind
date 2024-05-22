export const DEFAULT_LANG = 'en';

export const LANGUAGE_MAP = {
  en: 'English',
  vi: 'Viet Nam',
  zh: 'Chinese',
  ar: 'Arabic',
};

export const LANGUAGES = Object.keys(LANGUAGE_MAP);

export const LANGUAGE_PATHS = LANGUAGES.map((lang) => ({ params: { lang } }));
