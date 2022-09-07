import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'normalize.css/normalize.css'

const app = createApp(App)
app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}