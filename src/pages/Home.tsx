import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Search, ShieldCheck, Star, Lock, EyeOff, BadgeCheck, UserPlus, Briefcase } from 'lucide-react';
import { useT } from '../i18n';
import { categories, demoPosts, demoWorkers } from '../data/demo';
import { DemoBanner } from '../components/DemoNote';
import { PostCard, WorkerCard } from '../components/Cards';

export default function Home() {
  const { t } = useT();
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const submit = (e: FormEvent) => { e.preventDefault(); nav(`/workers${q ? `?q=${encodeURIComponent(q)}` : ''}`); };
  const trust = [[BadgeCheck, 'tr1'], [Star, 'tr2'], [Lock, 'tr3'], [EyeOff, 'tr4']] as const;
  const how = [[UserPlus, 'howW'], [Search, 'howC'], [Briefcase, 'howB']] as const;
  return (
    <>
      <section className="relative overflow-hidden border-b-4 border-gold/70 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="wrap relative grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              {t('heroL1')}<br /><span className="text-gold">{t('heroL2')}</span>
            </h1>
            <p className="mt-4 max-w-md text-slate-200">{t('heroSub')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/workers" className="btn-primary"><Search size={16} />{t('btnFind')}</Link>
              <Link to="/join" className="btn-outline">{t('btnJoin')}</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {categories.filter((c) => ['electrical', 'plumbing', 'construction', 'welding', 'carpentry', 'painting'].includes(c.id)).map(({ id, Icon }) => (
              <Link key={id} to={`/workers?cat=${id}`} className="flex flex-col items-center gap-2 rounded-2xl border border-electric/40 bg-navy-900/60 px-2 py-5 text-center text-xs font-medium text-slate-100 shadow-[0_0_24px_rgba(31,111,235,0.2)] hover:border-gold">
                <Icon className="text-gold" size={30} />{t('cat_' + id)}
              </Link>
            ))}
          </div>
        </div>
        <div className="wrap relative pb-8">
          <form onSubmit={submit} className="flex flex-col gap-2 rounded-xl bg-white p-3 text-slate-800 shadow-xl sm:flex-row dark:bg-navy-800 dark:text-white">
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 dark:border-white/15">
              <MapPin size={16} className="text-electric" />
              <select aria-label={t('locLabel')} className="bg-transparent py-2.5 text-sm outline-none">
                <option value="blr">{t('city_blr')}</option><option value="mys">{t('city_mys')}</option><option value="tum">{t('city_tum')}</option>
              </select>
            </label>
            <input value={q} onChange={(e) => setQ(e.target.value)} aria-label={t('search')} placeholder={t('searchPh')}
              className="flex-1 rounded-lg border border-slate-200 bg-transparent px-3 py-2.5 text-sm dark:border-white/15" />
            <button className="btn-primary">{t('search')}</button>
          </form>
        </div>
      </section>

      <section className="wrap py-10">
        <h2 className="h2 mb-4">{t('browse')}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {categories.map(({ id, Icon }) => (
            <Link key={id} to={`/workers?cat=${id}`} className="card flex flex-col items-center gap-2 py-4 text-center text-sm font-medium hover:border-electric">
              <Icon className="text-electric" size={26} />{t('cat_' + id)}
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap pb-10">
        <DemoBanner />
        <div className="mb-4 flex items-center justify-between"><h2 className="h2">{t('featured')}</h2><Link to="/workers" className="text-sm font-semibold text-electric">{t('viewAll')}</Link></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{demoWorkers.slice(0, 3).map((w) => <WorkerCard key={w.id} w={w} />)}</div>
      </section>

      <section className="wrap pb-10">
        <div className="mb-4 flex items-center justify-between"><h2 className="h2">{t('recent')}</h2><Link to="/feed" className="text-sm font-semibold text-electric">{t('viewAll')}</Link></div>
        <div className="grid gap-4 md:grid-cols-2">{demoPosts.map((p) => <PostCard key={p.id} p={p} />)}</div>
      </section>

      <section className="wrap pb-10">
        <h2 className="h2 mb-4">{t('how')}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {how.map(([I, k]) => (
            <div key={k} className="card"><I className="text-electric" size={26} /><h3 className="mt-2 font-semibold">{t(k)}</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t(k + 'd')}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-navy-800 text-white">
        <div className="wrap flex flex-col items-start gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl"><h2 className="text-xl font-bold sm:text-2xl">{t('bizTitle')}</h2><p className="mt-2 text-sm text-slate-200">{t('bizDesc')}</p></div>
          <div className="flex gap-3"><Link to="/business" className="btn-primary">{t('postJob')}</Link><Link to="/workers" className="btn-outline">{t('browseWorkers')}</Link></div>
        </div>
      </section>

      <section className="wrap py-10">
        <h2 className="h2 flex items-center gap-2"><ShieldCheck className="text-gold" />{t('trust')}</h2>
        <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">{t('trustNote')}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(([I, k]) => (
            <div key={k} className="card"><I className="text-electric" size={24} /><h3 className="mt-2 font-semibold">{t(k)}</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t(k + 'd')}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
