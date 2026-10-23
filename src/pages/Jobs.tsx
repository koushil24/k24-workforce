import { useT } from '../i18n';
import { demoJobs } from '../data/demo';
import { DemoBanner } from '../components/DemoNote';
import { JobCard } from '../components/Cards';

export default function Jobs() {
  const { t } = useT();
  return (
    <section className="wrap py-8">
      <h1 className="text-2xl font-bold text-navy-800 dark:text-white">{t('jobsTitle')}</h1>
      <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">{t('jobsDesc')}</p>
      <DemoBanner />
      <div className="flex flex-col gap-3">{demoJobs.map((j) => <JobCard key={j.id} j={j} />)}</div>
    </section>
  );
}
