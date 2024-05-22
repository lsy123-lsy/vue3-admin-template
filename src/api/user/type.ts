// 登录接口需要携带参数类型
export interface loginForm {
  username:string,
  password:string
}

interface dataType{
  token:string,
  message: string,
}
// 登录返回的数据类型
export interface loginResponseData {
  code: number,
  data: dataType,
}

// 服务器返回的用户信息相关的数据类型
interface user {
  userId: number,
  avator:string,
  username:string,
  password:string,
  desc:string,
  roles: string[],
  routes: string[],
  token:string
}
// 服务器返回额度用户信息相关数据类型
export interface userResponseData  {
  code:number,
  data:user
}