import axios from 'axios'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/store/userStore.ts'

const myAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 10000,
  withCredentials: true,
})

// Add a request interceptor
myAxios.interceptors.request.use(
  function (config) {
    const userStore = useUserStore()
    const token = userStore.loginUser?.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
myAxios.interceptors.response.use(
  function (response) {
    // system.log("resp->",response)
    const { data } = response
    // console.log('res->', data)
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes('auth/getLoginUser') &&
        !window.location.pathname.includes('/login')
      ) {
        message.warning('请先登录')
        window.location.href = `/login?redirect=${window.location.href}`
      }
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default myAxios
