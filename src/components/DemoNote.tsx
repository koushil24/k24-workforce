import { useT } from '../i18n';

export function DemoBadge() { const { t } = useT(); return <span className="demo">{t('demo')}</span>; }
export function DemoBanner() {
  const { t } = useT();
  return <p role="note" className="mb-6 rounded-lg border border-gold/50 bg-gold/10 p-3 text-sm text-amber-800 dark:text-gold">{t('demoNote')}</p>;
}
