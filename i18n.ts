import { Platform } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import id from './locales/id.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import zh from './locales/zh.json';
import tr from './locales/tr.json';
import vi from './locales/vi.json';

export const resources = {
  en: { translation: en },
  id: { translation: id },
  es: { translation: es },
  pt: { translation: pt },
  de: { translation: de },
  fr: { translation: fr },
  ru: { translation: ru },
  ja: { translation: ja },
  ko: { translation: ko },
  zh: { translation: zh },
  tr: { translation: tr },
  vi: { translation: vi },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  compatibilityJSON: 'v4',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

const LANGUAGE_KEY = 'cf_language';

const languageStore = {
  get: async (): Promise<string | null> => {
    if (Platform.OS === 'web') return localStorage.getItem(LANGUAGE_KEY);
    return require('expo-secure-store').getItemAsync(LANGUAGE_KEY);
  },
  set: async (value: string): Promise<void> => {
    if (Platform.OS === 'web') { localStorage.setItem(LANGUAGE_KEY, value); return; }
    return require('expo-secure-store').setItemAsync(LANGUAGE_KEY, value);
  },
};

/** The device's language, when it is one we ship. */
function deviceLanguage(): string | null {
  try {
    const code = Intl.DateTimeFormat().resolvedOptions().locale.slice(0, 2).toLowerCase();
    return code in resources ? code : null;
  } catch {
    return null;
  }
}

/**
 * Restore the language on app start: the user's saved choice, otherwise the
 * device language, otherwise English.
 */
export async function loadLanguage(): Promise<void> {
  const saved = await languageStore.get().catch(() => null);
  const code = saved && saved in resources ? saved : deviceLanguage();
  if (code && code !== i18n.language) await i18n.changeLanguage(code);
}

/** Switch language and remember it for the next launch. */
export async function setLanguage(code: string): Promise<void> {
  await i18n.changeLanguage(code);
  await languageStore.set(code).catch(() => {});
}

export default i18n;
