import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { en } from './en';
import { kn } from './kn';

export type Lang = 'en' | 'kn';
// To add Hindi later: create hi.ts and add it here.
const dict: Record<Lang, Record<string, string>> = { en, kn };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string, vars?: Record<string, string | number>) => string };
const LangCtx = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: (k) => k });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try { return localStorage.getItem('k24-lang') === 'kn' ? 'kn' : 'en'; } catch { return 'en'; }
  });
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('k24-lang', l); } catch { /* ignore */ }
  };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const t: Ctx['t'] = (k, vars) => {
    let s = dict[lang][k] ?? en[k] ?? k;
    if (vars) for (const [a, b] of Object.entries(vars)) s = s.replace(`{${a}}`, String(b));
    return s;
  };
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}
export const useT = () => useContext(LangCtx);
