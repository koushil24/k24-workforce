import { useSearchParams } from 'react-router-dom';
import { useT } from '../i18n';
import { categories, demoWorkers } from '../data/demo';
import { DemoBanner } from '../components/DemoNote';
import { WorkerCard } from '../components/Cards';

export default function Workers() {
  const { t } = useT();
  const [params, setParams] = useSearchParams();
  const q = (params.get('q') ?? '').toLowerCase();
  const cat = params.get('cat') ?? '';
  const set = (k: string, v: string) => { const n = new URLSearchParams(params); v ? n.set(k, v) : n.delete(k); setParams(n); };
  const list = demoWorkers.filter((w) =>
    (!cat || w.cat === cat) &&
    (!q || (w.name + ' ' + w.skills.join(' ') + ' ' + t('cat_' + w.cat)).toLowerCase().includes(q)));
  return (
    <section className="wrap py-8">
      <h1 className="text-2xl font-bold text-navy-800 dark:text-white">{t('workersTitle')}</h1>
      <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">{t('workersDesc')}</p>
      <DemoBanner />
      <div className="mb-6 flex flex-col gap-2 sm:flex-row">
        <input aria-label={t('search')} value={params.get('q') ?? ''} onChange={(e) => set('q', e.target.value)} placeholder={t('searchPh')}
          className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-white/20 dark:bg-navy-800" />
        <select aria-label={t('allProf')} value={cat} onChange={(e) => set('cat', e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-white/20 dark:bg-navy-800">
          <option value="">{t('allProf')}</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{t('cat_' + c.id)}</option>)}
        </select>
      </div>
      {list.length === 0 ? <p className="card text-center text-sm">{t('noResults')}</p> :
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{list.map((w) => <WorkerCard key={w.id} w={w} />)}</div>}
    </section>
  );
}
