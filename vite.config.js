import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                accountingAuditing: resolve(__dirname, 'accounting-auditing.html'),
                businessAdvisory: resolve(__dirname, 'business-advisory.html'),
                clientAccounting: resolve(__dirname, 'client-accounting.html'),
                contact: resolve(__dirname, 'contact.html'),
                itAdvisory: resolve(__dirname, 'it-advisory.html'),
                support: resolve(__dirname, 'support.html'),
                taxation: resolve(__dirname, 'taxation.html'),
            },
        },
    },
});
