// 创建用户相关的小仓库
import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user';
import type { loginForm } from '@/api/user/type';

let useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: () => {
    return {
      token: '', //用户的唯一标识token
    }
  },
  // 异步逻辑
  actions: {
    // 处理用户登录的方法
    async userLogin(data: loginForm) {
      // 登录请求
      let res = await reqLogin(data)
      if(res.code == 200) {
        this.token = res.data.token
        // 本地持久化存储
        localStorage.setItem('token',this.token)
        // 能保证当前函数返回一个成功的promise对象
      }else {
        return Promise.reject(new Error(res.data.message))
      }
      console.log(res)
    }
  },
  getter: {

  }
})

// 对外暴露获取小仓库的方案
export default useUserStore