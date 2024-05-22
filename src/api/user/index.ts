// 统一管理项目用户有关的接口
import request from "@/utils/request";
import type { loginForm, loginResponseData, userResponseData } from "./type";
//统一管理接口
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info"
}

// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginForm) => request.post<any,loginResponseData>(API.LOGIN_URL,data)
export const reqUserInfo = (data: loginResponseData) => request.post<any,userResponseData>(API.USERINFO_URL,data)
