import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                accountingAuditing: resolve(__dirname, 'src/accounting-auditing.html'),
                businessAdvisory: resolve(__dirname, 'src/business-advisory.html'),
                clientAccounting: resolve(__dirname, 'src/client-accounting.html'),
                contact: resolve(__dirname, 'src/contact.html'),
                itAdvisory: resolve(__dirname, 'src/it-advisory.html'),
                support: resolve(__dirname, 'src/support.html'),
                taxation: resolve(__dirname, 'src/taxation.html'),
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
