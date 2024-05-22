import { useEffect } from 'react';

export const AutoLanguage = ({ currentLang }) => {
  useEffect(() => {
    const selectedLang = localStorage.getItem('selectedLang');
    const { language: preferredLang } = new Intl.Locale(navigator.language || navigator.userLanguage);

    if (currentLang) {
      return;
    } else if (selectedLang) {
      window.location.pathname = selectedLang;
    } else if (preferredLang) {
      window.location.pathname = preferredLang;
    } else {
      window.location.pathname = 'en';
    }
  }, [currentLang]);

  return <div className="hidden invisible"></div>;
};
