import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'normalize.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import Prism from 'prismjs';

VMdEditor.use(vuepressTheme, { Prism }).use(createCopyCodePlugin());

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VMdEditor);
app.use(ElementPlus);
app.mount('#app');
