import chooseArea from './src/index.vue'
import { App } from 'vue'
// 让这个组件可以使用use的形式使用
export default {
  install(app: App) {
    app.component('v-choose-area', chooseArea)
  }
}