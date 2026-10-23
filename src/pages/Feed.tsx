import { useT } from '../i18n';
import { demoPosts } from '../data/demo';
import { DemoBanner } from '../components/DemoNote';
import { PostCard } from '../components/Cards';

export default function Feed() {
  const { t } = useT();
  return (
    <section className="wrap py-8">
      <h1 className="text-2xl font-bold text-navy-800 dark:text-white">{t('feedTitle')}</h1>
      <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">{t('feedDesc')}</p>
      <DemoBanner />
      <div className="mx-auto grid max-w-2xl gap-4">{demoPosts.map((p) => <PostCard key={p.id} p={p} />)}</div>
    </section>
  );
}
