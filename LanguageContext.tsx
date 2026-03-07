import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey } from './translations';

type Lang = 'en' | 'fr';

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem('gymland-lang');
        return (saved === 'fr' || saved === 'en') ? saved : 'fr';
    });

    useEffect(() => {
        localStorage.setItem('gymland-lang', lang);
    }, [lang]);

    const t = (key: TranslationKey): string => {
        return translations[lang][key] || translations['en'][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
