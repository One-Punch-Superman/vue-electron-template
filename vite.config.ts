import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import prismjs from 'vite-plugin-prismjs';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

const PROXY = {
  target: 'https://www.huawei.com/',
  secure: false,
  ws: true,
  changeOrigin: true
};

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
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
    port: 8080,
    open: true,
    proxy: {
      rest: PROXY
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
});
