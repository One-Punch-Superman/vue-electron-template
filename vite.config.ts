import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import prismjs from 'vite-plugin-prismjs';
import path from 'path';

export default defineConfig({
    plugins: [
        vue(),
        prismjs({
            languages: 'all'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    server: {
        host: '0.0.0.0',
        port: 8000,
        open: true,
        https: false,
        proxy: {}
    }
});
