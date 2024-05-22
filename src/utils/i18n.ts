import { LANGUAGE_MAP, DEFAULT_LANG } from './languages';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in LANGUAGE_MAP) return lang as keyof typeof LANGUAGE_MAP;
  return DEFAULT_LANG;
}
