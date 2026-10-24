import { useEffect, useState } from 'react';
import Logo from './Logo';
import { useT } from '../i18n';

const SHOW_MS = 2600; // loading screen stays at least this long (milliseconds)

export default function Splash() {
  const { t } = useT();
  const [phase, setPhase] = useState<'show' | 'fade' | 'done'>('show');
  useEffect(() => {
    const a = setTimeout(() => setPhase('fade'), SHOW_MS);
    const b = setTimeout(() => setPhase('done'), SHOW_MS + 500);
    document.body.style.overflow = 'hidden';
    return () => { clearTimeout(a); clearTimeout(b); document.body.style.overflow = ''; };
  }, []);
  useEffect(() => { if (phase === 'done') document.body.style.overflow = ''; }, [phase]);
  if (phase === 'done') return null;
  return (
    <div role="status" aria-label="Loading"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-navy-900 transition-opacity duration-500 ${phase === 'fade' ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      style={{ background: 'radial-gradient(circle at 50% 45%, #102A5C 0%, #06122B 65%)' }}>
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="splash-scene relative flex h-[380px] w-full items-center justify-center" aria-hidden="true">
        <div className="splash-ring splash-ring-a" />
        <div className="splash-ring splash-ring-b" />
        <Logo className="splash-logo relative z-10 h-auto w-[min(66vw,320px)]" />
      </div>
      <p className="splash-tag relative px-6 text-center text-sm font-medium text-gold">{t('brandTag')}</p>
      <div className="relative mt-6 h-1.5 w-52 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
        <span className="splash-bar block h-full rounded-full bg-gradient-to-r from-electric to-gold" />
      </div>
    </div>
  );
}
