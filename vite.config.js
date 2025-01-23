import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    root: '.',
    plugins: [react()],
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg'],
    base: '/arcintel-website/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        emptyOutDir: true,
    },
    server: {
        port: 3000,
        open: true,
    },
    preview: {
        port: 4000,
    }
});
