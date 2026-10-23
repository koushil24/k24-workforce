import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path = repository name, so the site works at
// https://koushil24.github.io/k24-workforce/
export default defineConfig({
  base: '/k24-workforce/',
  plugins: [react()],
});
