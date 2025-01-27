import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    root: '.',
    plugins: [react()],
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg'],
    base: '/', // Adjust this for GitHub Pages if necessary
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: true, // Enables debugging with source maps
        emptyOutDir: true, // Clears the output directory before building
        manifest: true, // Generates a manifest.json for optimized builds
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]', // Organizes assets in an 'assets' folder
                chunkFileNames: 'assets/[name].[hash].js',
                entryFileNames: 'assets/[name].[hash].js',
            },
        },
    },
    server: {
        port: 3000, // Development server port
        open: true, // Automatically opens the app in the browser
        proxy: {
            // Example: Proxy API requests during development
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    preview: {
        port: 4000, // Preview server port
        strictPort: true, // Ensures the port is not automatically incremented
    },
});
