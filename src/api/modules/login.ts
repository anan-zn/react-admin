/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-03 15:11:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 16:25:39
 * @FilePath: \react-admin\src\api\modules\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-03 15:11:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-03 15:23:00
 * @FilePath: \react-admin\src\api\modules\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Login } from "@/api/interface/index";
import qs from "qs";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(`/login`, params);
	return http.post<Login.ResLogin>(`/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
	return http.post<Login.ResLogin>(`/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
	return http.post<Login.ResLogin>(`/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};

// * 获取用户完整信息
export const getUserInfoById = (id: number) => {
	return http.get<Login.UserInfo>(`/users/` + id);
};

// * 获取按钮权限
export const getAuthorButtons = () => {
	return http.get<Login.ResAuthButtons>(`/auth/buttons`);
};

// * 获取用户菜单列表
export const getUserMenuList = (id: number) => {
	return http.get<Menu.UserMenuOptions[]>(`/role/${id}/menu`);
};

// * 获取菜单列表
export const getMenuList = () => {
	return http.get<Menu.MenuOptions[]>(`/menu/list`);
};
