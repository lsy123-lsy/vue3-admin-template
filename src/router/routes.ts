// 对外暴露路由(常量路由)
export const constantRoute = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
    name: 'login'
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/404',
    component: () => import('../views/404/index.vue'),
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any'
  }
]