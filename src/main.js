// 映入createApp用于创建应用
import { createApp } from "vue"


// 引入App根组件
import App from './App.vue'
// 引入路由器
import router from './router/index.js'
// import './css/index.css'


// 创建根组件应用
const app = createApp(App);
// 注册一个全局自定义指令 `v-focus`
app.directive('focus', {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el) {
      // 聚焦元素
      el.focus()
    }
  })
// 使用路由器
app.use(router)
// 将整个应用挂在到id为app的容器上
app.mount('#app')