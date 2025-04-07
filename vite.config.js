import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Determine repository name with multiple fallbacks for maximum flexibility
let repoName = process.env.VITE_REPO_NAME; // First try from GitHub Actions

// If not set, try from package.json
if (!repoName) {
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    repoName = packageJson.name;
  } catch (e) {
    console.warn('Could not read package.json for repo name');
  }
}

// Default fallback
if (!repoName) {
  repoName = 'System3-Vue';
  console.warn('Using default repo name:', repoName);
}

// Get base URL - use repo name in production, relative path in development
const base = process.env.NODE_ENV === 'production' ? `/${repoName}/` : './';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // base: '/',
  base: base,
});