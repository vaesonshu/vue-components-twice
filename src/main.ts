import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/styles/base.scss'
import '../src/styles/ui.scss'
import * as EIcons from '@element-plus/icons-vue'
import { toLine } from './utils'
const app = createApp(App)
for (let i in EIcons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (EIcons as any)[i])
}
// 全局注册图标，会牺牲一些性能
// 封装成el-icon-xxx的形式
app.use(router)
app.use(ElementPlus)
app.mount('#app')