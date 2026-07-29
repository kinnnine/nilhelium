import { defineConfig } from 'vite';

export default defineConfig({
    base: '/nilhelium/',
    esbuild: {
        jsx: 'transform',
        jsxFactory: 'm',
        jsxFragment: 'm.Fragment',
    },
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});