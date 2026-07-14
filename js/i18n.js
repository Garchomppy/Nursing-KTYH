import vi from './i18n/vi.js';
import en from './i18n/en.js';
import la from './i18n/la.js';

const translations = {
  vi,
  en,
  la
};

let currentLang = localStorage.getItem("site_lang") || "vi";

export function setLang(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem("site_lang", lang);
    window.dispatchEvent(new Event("languageChanged"));
  }
}

export function getLang() {
  return currentLang;
}

export function t(key) {
  return translations[currentLang][key] || key;
}

export function getDays() {
  return translations[currentLang]["top.days"] || translations["vi"]["top.days"];
}
