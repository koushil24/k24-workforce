import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { LangProvider } from './i18n';
import { ThemeProvider } from './lib/theme';
import './index.css';

// HashRouter keeps nested pages working after refresh on GitHub Pages.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <LangProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LangProvider>
    </HashRouter>
  </React.StrictMode>,
);
