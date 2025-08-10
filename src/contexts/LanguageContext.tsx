'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipos para as traduções
type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Criando o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook personalizado para usar o contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Função para obter tradução aninhada
const getNestedTranslation = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
};

// Componente Provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');
  const [translations, setTranslations] = useState<any>({});

  // Carregar traduções quando o idioma mudar
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../locales/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        // Fallback para português
        const fallback = await import('../locales/pt.json');
        setTranslations(fallback.default);
      }
    };

    loadTranslations();
  }, [language]);

  // Função para obter tradução
  const t = (key: string): string => {
    return getNestedTranslation(translations, key);
  };

  // Persistir idioma no localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['pt', 'en', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
