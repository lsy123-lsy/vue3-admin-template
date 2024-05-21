import SvgIcon from './SvgIcon/index.vue'

// 全局对象
const allGLobalComponent = {SvgIcon}

// 对外暴露插件
export default {
  install(app) {
    // 注册项目全部的全局组件
    Object.keys(allGLobalComponent).forEach(key => {
      // 注册为全局组件
      app.component(key,allGLobalComponent[key])
    });
  }
}