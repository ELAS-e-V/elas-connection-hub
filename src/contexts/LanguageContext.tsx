import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, Language, TranslationKey } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("de");

  const t = translations[language];

  React.useEffect(() => {
    // Keep the document language and key meta tags in sync with selected language
    try {
      document.documentElement.lang = language;
      document.title = `${t.hero.title} — ELAS e.V.`;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', t.hero.subtitle);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) (ogDesc as HTMLMetaElement).setAttribute('content', t.hero.subtitle);

      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) (twitterDesc as HTMLMetaElement).setAttribute('content', t.hero.subtitle);

      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) (ogLocale as HTMLMetaElement).setAttribute('content', language === 'de' ? 'de_DE' : 'en_US');
    } catch (err) {
      // no-op in non-browser environments
    }
  }, [language, t]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
