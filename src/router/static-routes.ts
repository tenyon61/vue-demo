import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
// 路由菜单
export default [
  {
    path: '/',
    component: HomePage,
    meta: {
      label: '主页',
      icon: 'ant-design:home-outlined',
    },
  },
  {
    path: '/login',
    component: () => import('@/pages/common/UserLogin.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/register',
    component: () => import('@/pages/common/UserRegister.vue'),
    meta: {
      title: '登录',
    },
  },
] as Array<RouteRecordRaw>
