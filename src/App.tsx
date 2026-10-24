import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import SetupPage from './pages/SetupPage';

const Workers = lazy(() => import('./pages/Workers'));
const Jobs = lazy(() => import('./pages/Jobs'));
const Feed = lazy(() => import('./pages/Feed'));

// Pages that are not built yet. Each one says so honestly.
const planned: [string, string, string, number][] = [
  ['booking', 'bookingTitle', 'bookingDesc', 3],
  ['business', 'forBusinesses', 'bizDesc', 4],
  ['admin', 'adminTitle', 'adminDesc', 5],
  ['login', 'loginTitle', 'loginDesc', 2],
  ['join', 'joinTitle', 'joinDesc', 2],
  ['about', 'footAbout', 'infoDesc', 5],
  ['contact', 'contact', 'infoDesc', 5],
  ['help', 'help', 'infoDesc', 5],
  ['privacy', 'privacy', 'infoDesc', 5],
  ['terms', 'terms', 'infoDesc', 5],
  ['guidelines', 'guidelines', 'infoDesc', 5],
];

export default function App() {
  return (
    <Suspense fallback={<div className="flex justify-center py-24" role="status" aria-label="Loading"><div className="h-10 w-10 animate-spin rounded-full border-4 border-electric border-t-transparent" /></div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workers" element={<Workers />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="feed" element={<Feed />} />
          {planned.map(([path, title, desc, phase]) => (
            <Route key={path} path={path} element={<SetupPage title={title} desc={desc} phase={phase} />} />
          ))}
          <Route path="*" element={<SetupPage title="notFound" desc="" phase={0} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
