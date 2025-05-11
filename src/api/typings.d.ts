declare namespace API {
  type deleteUserParams = {
    id: number
  }

  type getUserByIdParams = {
    id: number
  }

  type getUserVOByIdParams = {
    id: number
  }

  type LoginUserVO = {
    /** id */
    id?: number
    /** 用户昵称 */
    userName?: string
    /** 用户头像 */
    userAvatar?: string
    /** 令牌 */
    token?: string
  }

  type OrderItem = {
    column?: string
    asc?: boolean
  }

  type PageUser = {
    records?: User[]
    total?: number
    size?: number
    current?: number
    orders?: OrderItem[]
    optimizeCountSql?: PageUser
    searchCount?: PageUser
    optimizeJoinOfCountSql?: boolean
    maxLimit?: number
    countId?: string
    pages?: number
  }

  type PageUserVO = {
    records?: UserVO[]
    total?: number
    size?: number
    current?: number
    orders?: OrderItem[]
    optimizeCountSql?: PageUserVO
    searchCount?: PageUserVO
    optimizeJoinOfCountSql?: boolean
    maxLimit?: number
    countId?: string
    pages?: number
  }

  type resetPwdParams = {
    id: number
  }

  type RtnDataBoolean = {
    /** 响应代码 */
    code?: number
    /** 响应内容 */
    data?: boolean
    /** 响应消息 */
    message?: string
  }

  type RtnDataLoginUserVO = {
    /** 响应代码 */
    code?: number
    data?: LoginUserVO
    /** 响应消息 */
    message?: string
  }

  type RtnDataLong = {
    /** 响应代码 */
    code?: number
    /** 响应内容 */
    data?: number
    /** 响应消息 */
    message?: string
  }

  type RtnDataPageUser = {
    /** 响应代码 */
    code?: number
    data?: PageUser
    /** 响应消息 */
    message?: string
  }

  type RtnDataPageUserVO = {
    /** 响应代码 */
    code?: number
    data?: PageUserVO
    /** 响应消息 */
    message?: string
  }

  type RtnDataUser = {
    /** 响应代码 */
    code?: number
    data?: User
    /** 响应消息 */
    message?: string
  }

  type RtnDataUserVO = {
    /** 响应代码 */
    code?: number
    data?: UserVO
    /** 响应消息 */
    message?: string
  }

  type User = {
    id?: number
    userAccount?: string
    userPassword?: string
    unionId?: string
    mpOpenId?: string
    userName?: string
    userAvatar?: string
    userProfile?: string
    sex?: number
    email?: string
    phone?: string
    userRole?: string
    vipNumber?: number
    vipCode?: string
    vipExpireTime?: string
    shareCode?: string
    inviteUser?: number
    editTime?: string
    createTime?: string
    updateTime?: string
    isDelete?: number
  }

  type UserAddDTO = {
    /** 账号 */
    userAccount?: string
    /** 用户昵称 */
    userName?: string
    /** 性别 */
    sex?: number
    /** 邮箱 */
    email?: string
    /** 手机号 */
    phone?: string
    /** 用户角色 */
    userRole?: string
  }

  type UserLoginDTO = {
    /** 账号 */
    userAccount?: string
    /** 密码 */
    userPassword?: string
  }

  type UserQueryDTO = {
    /** 当前页号 */
    current?: number
    /** 页面大小 */
    pageSize?: number
    /** 排序字段 */
    sortField?: string
    /** 默认升序 ascend/descend */
    sortOrder?: string
    /** id */
    id?: number
    /** 用户昵称 */
    userName?: string
    /** 用户账号 */
    userAccount?: string
    /** 简介 */
    userProfile?: string
    /** 邮箱 */
    email?: string
    /** 手机号 */
    phone?: string
    /** 用户角色 */
    userRole?: string
  }

  type UserRegisterDTO = {
    /** 账号 */
    userAccount?: string
    /** 首次输入密码 */
    userPassword?: string
    /** 二次输入密码 */
    checkPassword?: string
  }

  type UserUpdateDTO = {
    /** id */
    id: number
    /** 用户昵称 */
    userName?: string
    /** 账号 */
    userAccount?: string
    /** 性别 */
    sex?: number
    /** 邮箱 */
    email?: string
    /** 手机号 */
    phone?: string
    /** 用户角色 */
    userRole?: string
  }

  type UserUpdateMyDTO = {
    /** 用户昵称 */
    userName?: string
    /** 用户头像 */
    userAvatar?: string
    /** 简介 */
    userProfile?: string
  }

  type UserVO = {
    /** id */
    id?: number
    /** 账号 */
    userAccount?: string
    /** 用户昵称 */
    userName?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户简介 */
    userProfile?: string
    /** 性别 */
    sex?: number
    /** 邮箱 */
    email?: string
    /** 手机号 */
    phone?: string
    /** 用户角色 */
    userRole?: string
    /** 创建时间 */
    createTime?: string
  }
}
