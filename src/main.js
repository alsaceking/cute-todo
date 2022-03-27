import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button, Image as VanImage, Icon, Tab, Tabs, Tag, Checkbox, Popup, Field, CellGroup, RadioGroup, Radio,
  SwipeCell
} from 'vant'

// 引入全局样式
import '@/assets/less/index.less'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Button)
  .use(VanImage)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(Tag)
  .use(Checkbox)
  .use(Popup)
  .use(Field)
  .use(CellGroup)
  .use(Radio)
  .use(RadioGroup)
  .use(SwipeCell)
  .use(store).use(router).mount('#app')
