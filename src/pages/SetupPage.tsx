import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';
import { useT } from '../i18n';

export default function SetupPage({ title, desc, phase }: { title: string; desc: string; phase: number }) {
  const { t } = useT();
  return (
    <section className="wrap py-12">
      <div className="card mx-auto max-w-xl text-center">
        <Construction className="mx-auto text-gold" size={36} />
        <h1 className="mt-3 text-2xl font-bold text-navy-800 dark:text-white">{t(title)}</h1>
        {desc && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t(desc)}</p>}
        {phase > 0 && <p className="mt-4"><span className="demo">{t('notBuilt')} · {t('plannedPhase', { n: phase })}</span></p>}
        <Link to="/" className="btn-primary mt-6">{t('backHome')}</Link>
      </div>
    </section>
  );
}
