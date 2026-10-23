import { Briefcase, Heart, MapPin, MessageCircle, Share2, UserRound } from 'lucide-react';
import { useT } from '../i18n';
import { DemoBadge } from './DemoNote';
import { demoJobs, demoPosts, demoWorkers } from '../data/demo';

export function WorkerCard({ w }: { w: (typeof demoWorkers)[number] }) {
  const { t } = useT();
  return (
    <article className="card flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-700 text-white"><UserRound size={26} /></div>
        <div className="min-w-0">
          <h3 className="font-semibold">{w.name}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-300">{t('cat_' + w.cat)}</p>
          <p className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><MapPin size={12} />{w.loc} · {w.years} {t('yrs')}</p>
        </div>
        <span className="ml-auto"><DemoBadge /></span>
      </div>
      <div className="flex flex-wrap gap-1.5">{w.skills.map((s) => <span key={s} className="tag">{s}</span>)}</div>
      <p className="text-xs font-medium text-green-700 dark:text-green-400">● {t('availNow')}</p>
      <div className="mt-auto flex gap-2">
        <button className="btn-soft flex-1" disabled title={t('notBuilt')}>{t('viewProfile')}</button>
        <button className="btn-primary flex-1" disabled title={t('notBuilt')}>{t('requestBooking')}</button>
      </div>
    </article>
  );
}

export function JobCard({ j }: { j: (typeof demoJobs)[number] }) {
  const { t } = useT();
  return (
    <article className="card flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-700 text-white"><Briefcase size={22} /></div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold">{j.title} <DemoBadge /></h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">{j.loc} · {j.days} {t('daysLabel')} · {j.need} {t('workersNeeded')}</p>
        <p className="mt-1 text-sm font-semibold text-navy-800 dark:text-white">{j.budget}</p>
      </div>
      <button className="btn-primary" disabled title={t('notBuilt')}>{t('apply')}</button>
    </article>
  );
}

export function PostCard({ p }: { p: (typeof demoPosts)[number] }) {
  const { t } = useT();
  return (
    <article className="card flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 text-white"><UserRound size={20} /></div>
        <div><h3 className="text-sm font-semibold">{p.author}</h3><p className="text-xs text-slate-500 dark:text-slate-400">{t('cat_' + p.cat)} · {p.loc}</p></div>
        <span className="ml-auto"><DemoBadge /></span>
      </div>
      <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-navy-700 to-navy-900 text-xs text-slate-300">{t('demo')}</div>
      <p className="text-sm">{p.caption}</p>
      <div className="flex flex-wrap items-center gap-2">
        {[[Heart, 'like'], [MessageCircle, 'comment'], [Share2, 'share']].map(([I, k]) => {
          const Icon = I as typeof Heart;
          return <button key={k as string} disabled className="btn-soft px-3 py-1.5" title={t('notBuilt')}><Icon size={14} />{t(k as string)}</button>;
        })}
        <button className="btn-primary ml-auto px-3 py-1.5" disabled title={t('notBuilt')}>{t('bookPro')}</button>
      </div>
    </article>
  );
}
