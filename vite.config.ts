import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Custom plugin to copy GitHub Pages specific files after build
const copyGitHubPagesFiles = () => {
  return {
    name: 'copy-github-pages-files',
    // closeBundle should be a function; ensure it's async and robust if files are missing
    closeBundle: async () => {
      try {
        const fsExtra = await import('fs-extra');
        const { copy, pathExists } = fsExtra;

        // Copy 404.html from client if it exists
        if (await pathExists('./client/404.html')) {
          await copy('./client/404.html', './dist/404.html');
        }

        // Copy .nojekyll if present at repo root (helps GitHub Pages routing)
        if (await pathExists('./.nojekyll')) {
          await copy('./.nojekyll', './dist/.nojekyll');
        }

        console.log('Copied GitHub Pages specific files to dist folder (if present)');
      } catch (error) {
        // Non-fatal — log and continue
        // eslint-disable-next-line no-console
        console.error('Error copying GitHub Pages files:', error);
      }
    }
  };
};

export default defineConfig({
  plugins: [
    react(),
    copyGitHubPagesFiles(), // Add the custom plugin to copy GitHub Pages files
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  // For project GitHub Pages site, use repository name as base
  base: "/VivekDixit.github.io/",
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? '';
          const parts = name.split('.');
          // take last extension if present
          const ext = parts.length > 1 ? parts[parts.length - 1] : '';
          let extType = ext;
          if (/png|jpe?g|webp|gif|svg|ico/i.test(ext)) {
            extType = 'img';
          } else if (/css/i.test(ext)) {
            extType = 'css';
          } else if (/js/i.test(ext)) {
            extType = 'js';
          } else if (!extType) {
            extType = 'asset';
          }
          return `${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      }
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
