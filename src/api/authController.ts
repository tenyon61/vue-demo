// @ts-ignore

import request from '@/request.ts'

/** 获取当前登录用户 GET /api/auth/getLoginUser */
export async function getLoginUser(options?: { [key: string]: any }) {
  return request<API.RtnDataLoginUserVO>('/api/auth/getLoginUser', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 用户登录 POST /api/auth/login */
export async function login(body: API.UserLoginDTO, options?: { [key: string]: any }) {
  return request<API.RtnDataLoginUserVO>('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 用户注销 POST /api/auth/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.RtnDataBoolean>('/api/auth/logout', {
    method: 'POST',
    ...(options || {}),
  })
}

/** 用户注册 POST /api/auth/register */
export async function register(body: API.UserRegisterDTO, options?: { [key: string]: any }) {
  return request<API.RtnDataLong>('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
