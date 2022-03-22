import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Popup } from 'vant'

// 引入全局样式
import '@/assets/less/index.less'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Button)
  .use(Popup)
  .use(store).use(router).mount('#app')
