// @ts-ignore

import request from '@/request.ts'

/** 创建用户 POST /api/user/add */
export async function addUser(body: API.UserAddDTO, options?: { [key: string]: any }) {
  return request<API.RtnDataLong>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 删除用户 DELETE /api/user/delete/${param0} */
export async function deleteUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params
  return request<API.RtnDataBoolean>(`/api/user/delete/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  })
}

/** 根据 id 获取用户（仅管理员） GET /api/user/get */
export async function getUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.RtnDataUser>('/api/user/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 分页获取用户列表（仅管理员） POST /api/user/getUserPage */
export async function getUserPage(body: API.UserQueryDTO, options?: { [key: string]: any }) {
  return request<API.RtnDataPageUser>('/api/user/getUserPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 根据 id 获取包装类 GET /api/user/getUserVO */
export async function getUserVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.RtnDataUserVO>('/api/user/getUserVO', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 分页获取用户封装列表（仅管理员） POST /api/user/getUserVOPage */
export async function getUserVoPage(body: API.UserQueryDTO, options?: { [key: string]: any }) {
  return request<API.RtnDataPageUserVO>('/api/user/getUserVOPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 重置密码 PUT /api/user/resetPwd/${param0} */
export async function resetPwd(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.resetPwdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params
  return request<API.RtnDataBoolean>(`/api/user/resetPwd/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  })
}

/** 更新用户 POST /api/user/update */
export async function updateUser(body: API.UserUpdateDTO, options?: { [key: string]: any }) {
  return request<API.RtnDataBoolean>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 更新个人信息 POST /api/user/updateMy */
export async function updateMyUser(body: API.UserUpdateMyDTO, options?: { [key: string]: any }) {
  return request<API.RtnDataBoolean>('/api/user/updateMy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
