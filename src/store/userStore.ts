import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getLoginUser } from '@/api/authController.ts'

export const useUserStore = defineStore(
  'userStore',
  () => {
    const loginUser = ref<API.LoginUserVO>({
      token: '',
      userName: '未登录',
    })

    /**
     * 远程获取登录用户信息
     */
    async function fetchLoginUser() {
      await getLoginUser().then((res) => {
        if (res.data.code === 0 && res.data.data) {
          loginUser.value = res.data.data
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
  },
  {
    persist: {
      key: 'user',
    },
  },
)
