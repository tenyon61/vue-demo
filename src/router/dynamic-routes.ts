import type { RouteRecordRaw } from 'vue-router'
// 路由菜单
const ProLayout = () => import('@/layouts/Index.vue')
const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: ProLayout,
    redirect: '/dashboard/workplace',
    meta: {
      title: '控制台',
      icon: 'ri:dashboard-3-line',
    },
    children: [
      {
        path: '/dashboard/workplace',
        name: 'Workplace',
        component: () => import('@/pages/dashboard/WorkPlacePage.vue'),
        meta: {
          title: '工作台',
          icon: 'ri:dashboard-line',
        },
      },
    ],
  },
  {
    path: '/console',
    name: 'Console',
    component: ProLayout,
    redirect: '/console/userlist',
    meta: {
      title: '系统管理',
      icon: 'ri:settings-3-line',
      roles: ['console:manage'],
    },
    children: [
      {
        path: '/console/userlist',
        name: 'userList',
        component: () => import('@/pages/console/user/UserListPage.vue'),
        meta: {
          title: '用户管理',
          icon: 'ri:user-line',
          roles: ['console:user'],
        },
      },
    ],
  },
]

export default dynamicRoutes
