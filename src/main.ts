import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
