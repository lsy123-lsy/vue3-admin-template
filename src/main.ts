import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入全局变量
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置elemetplus国际化
import { zhCn } from 'element-plus/es/locales.mjs'
// 引入路由
import router from '@/router'
// 引入仓库
import pinia from './store'

const app = createApp(App)
app.use(ElementPlus,{
  locale: zhCn  //elementplus国际化
})

app.use(router)
app.use(pinia)
app.mount('#app')

