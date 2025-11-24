import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        // Add other pages here if they are separate entry points, 
        // but for a multi-page site, we might need to list them all.
        accounting_auditing: resolve(__dirname, 'src/accounting-auditing.html'),
        client_accounting: resolve(__dirname, 'src/client-accounting.html'),
        taxation: resolve(__dirname, 'src/taxation.html'),
        business_advisory: resolve(__dirname, 'src/business-advisory.html'),
        it_advisory: resolve(__dirname, 'src/it-advisory.html'),
        support: resolve(__dirname, 'src/support.html'),
        contact: resolve(__dirname, 'src/contact.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
