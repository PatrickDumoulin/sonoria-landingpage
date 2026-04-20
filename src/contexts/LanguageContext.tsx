import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  return browserLang?.startsWith("fr") ? "fr" : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "fr" ? "en" : "fr");
  };

  const t = (fr: string, en: string) => {
    return language === "fr" ? fr : en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
