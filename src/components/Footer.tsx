import { Link } from 'react-router-dom';
import { useT } from '../i18n';
import Logo from './Logo';

const links: [string, string][] = [['/about', 'footAbout'], ['/contact', 'contact'], ['/help', 'help'], ['/privacy', 'privacy'], ['/terms', 'terms'], ['/guidelines', 'guidelines'], ['/booking', 'bookService'], ['/admin', 'admin']];

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="wrap py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo className="h-20 w-auto" />
            <p className="mt-2 text-sm text-gold">{t('brandTag')}</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
            {links.map(([to, k]) => <Link key={to} to={to} className="hover:text-white">{t(k)}</Link>)}
          </nav>
        </div>
        <p className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-400">© K_24 WORKFORCE. {t('legalNote')}</p>
      </div>
    </footer>
  );
}
