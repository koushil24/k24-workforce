import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useT } from '../i18n';
import { useTheme } from '../lib/theme';

import Logo from './Logo';
const links: [string, string][] = [['/', 'home'], ['/workers', 'findWorkers'], ['/feed', 'workFeed'], ['/jobs', 'findJobs'], ['/business', 'forBusinesses']];

export default function Header() {
  const { t, lang, setLang } = useT();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const navCls = ({ isActive }: { isActive: boolean }) =>
    `border-b-2 py-1 text-sm font-medium ${isActive ? 'border-electric text-white' : 'border-transparent text-slate-300 hover:text-white'}`;
  const langBtn = (l: 'kn' | 'en', label: string) => (
    <button onClick={() => setLang(l)} aria-pressed={lang === l}
      className={`px-2 py-1 text-xs font-semibold ${lang === l ? 'bg-electric text-white' : 'text-slate-300 hover:text-white'}`}>{label}</button>
  );
  return (
    <header className="sticky top-0 z-40 bg-navy-900 shadow-lg shadow-black/20">
      <div className="wrap flex h-[72px] items-center justify-between gap-3">
        <Link to="/" aria-label="K_24 WORKFORCE"><Logo className="h-14 w-auto" /></Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map(([to, k]) => <NavLink key={to} to={to} end={to === '/'} className={navCls}>{t(k)}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-md border border-white/20" role="group" aria-label={t('language')}>
            {langBtn('kn', 'ಕನ್ನಡ')}{langBtn('en', 'English')}
          </div>
          <button onClick={toggle} aria-label={t('toggleTheme')} className="rounded-md border border-white/20 p-1.5 text-slate-200 hover:text-white">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/login" className="btn-outline hidden px-3 py-1.5 sm:inline-flex">{t('login')}</Link>
          <Link to="/join" className="btn-primary hidden px-3 py-1.5 sm:inline-flex">{t('join')}</Link>
          <button className="rounded-md p-1.5 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label={t('menu')} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="wrap flex flex-col gap-1 border-t border-white/10 pb-4 pt-2 lg:hidden" aria-label="Mobile">
          {[...links, ['/login', 'login'], ['/join', 'join']].map(([to, k]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-slate-300'}`}>{t(k)}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
