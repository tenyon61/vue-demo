import { ref } from 'vue'
import { defineStore } from 'pinia'
import ACCESS_ENUM from '@/composables/access/accessEnum.ts'
import { getLoginUser } from '@/api/authController.ts'

export const useUserStore = defineStore('userStore', () => {
  const loginUser = ref<API.LoginUserVO>({
    userName: '未登录',
  })

  /**
   * 远程获取登录用户信息
   */
  async function fetchLoginUser() {
    await getLoginUser().then((res) => {
      if (res.data.code === 0 && res.data.data) {
        loginUser.value = res.data.data
      } else {
        loginUser.value = { userRole: ACCESS_ENUM.NOT_LOGIN }
      }
    })
  }

  /**
   * 单独设置用户信息
   *
   * @param newLoginUser
   */
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, fetchLoginUser, setLoginUser }
})
