import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  plugins: [
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [resolve(__dirname, 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        // Add other pages here if they are separate entry points, 
        // but for a multi-page site, we might need to list them all.
        accounting_auditing: resolve(__dirname, 'src/accounting-auditing/index.html'),
        client_accounting: resolve(__dirname, 'src/client-accounting/index.html'),
        taxation: resolve(__dirname, 'src/taxation/index.html'),
        business_advisory: resolve(__dirname, 'src/business-advisory/index.html'),
        careers: resolve(__dirname, 'src/careers/index.html'),
        it_advisory: resolve(__dirname, 'src/it-advisory/index.html'),
        support: resolve(__dirname, 'src/support/index.html'),
        contact: resolve(__dirname, 'src/contact/index.html'),
        team: resolve(__dirname, 'src/team/index.html'),
        team_member: resolve(__dirname, 'src/team-member/index.html'),
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
