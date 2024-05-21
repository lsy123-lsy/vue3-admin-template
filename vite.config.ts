import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg需要用到的插件
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
// mock插件提供的方法
import {viteMockServe} from 'vite-plugin-mock'

export default defineConfig(({command}) => {
  return {
    plugins: [vue(),
      // 配置svg插件
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      // 配置mock插件
      viteMockServe({
        localEnabled: command === 'serve',  //保证开发阶段可以使用mock接口
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
})
