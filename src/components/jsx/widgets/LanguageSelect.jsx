import { LanguagesIcon } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '~/components/jsx/ui/select';
import { AutoLanguage } from './AutoLanguage';

export const LanguageSelect = ({ langMap, currentLang, slugMapping }) => {
  const [selectedLang, setSelectedLang] = useState(currentLang);

  const navigateTo = (selected) => {
    setSelectedLang(selected);
    localStorage.setItem('selectedLang', selected);
    const curLangPath = new RegExp('^/' + currentLang + '(?=(/|$))');
    const curPath = window.location.pathname;

    let newPath = curPath.replace(curLangPath, `/${selected}`);

    if (!isEmpty(slugMapping)) {
      const currentSlug = get(slugMapping, currentLang);
      const newSlug = get(slugMapping, selected);
      newPath = newPath.replace(currentSlug, newSlug);
    }

    window.location.pathname = newPath;
  };

  return (
    <Fragment>
      <AutoLanguage client:load currentLang={currentLang} />

      <Select value={selectedLang} onValueChange={navigateTo} defaultValue={currentLang}>
        <SelectTrigger className="w-auto" aria-label="Update language">
          <LanguagesIcon className="h-4 w-4 inline-block mr-1" />

          <SelectValue aria-label={selectedLang}>
            <div className="hidden md:block">{langMap[selectedLang]}</div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Object.entries(langMap).map(([lang, label]) => (
            <SelectItem value={lang} key={lang}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Fragment>
  );
};
