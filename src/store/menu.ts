import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', () => {
  const menuList = ref([
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: 'ProLayout',
      redirect: '/dashboard/workplace',
      meta: {
        title: '控制台',
        icon: 'ri:dashboard-3-line',
        roles: ['sys:dashboard'],
      },
      children: [
        {
          path: '/dashboard/workplace',
          name: 'Workplace',
          component: '@/views/dashboard/workplace/WorkPlacePage.vue',
          meta: {
            title: '工作台',
            icon: 'ri:dashboard-line',
            roles: ['sys:dashboard'],
          },
        },
      ],
    },
  ])
  const getAuthMenuList = () => {}
  return {}
})
