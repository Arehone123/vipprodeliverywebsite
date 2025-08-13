import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/vipprodeliverywebsite/',
    plugins: [react()],
    build: {
        outDir: 'docs'
    },
    publicDir: 'public'
});
