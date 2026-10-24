import { useT } from '../i18n';

const base = import.meta.env.BASE_URL;
// The logo changes with the language: English logo or Kannada logo.
export default function Logo({ className = 'h-14 w-auto' }: { className?: string }) {
  const { lang } = useT();
  const src = `${base}assets/${lang === 'kn' ? 'k24-logo-kn.png' : 'k24-logo.png'}`;
  return <img src={src} alt="K_24 WORKFORCE" className={className} />;
}
