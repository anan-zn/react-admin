/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-02 13:38:39
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-14 17:40:11
 * @FilePath: \react-admin\src\redux\modules\global\action.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as types from "@/redux/mutation-types";
import { ThemeConfigProp } from "@/redux/interface/index";

// * setToken
export const setToken = (token: string) => ({
	type: types.SET_TOKEN,
	token
});

// * setAssemblySize
export const setAssemblySize = (assemblySize: string) => ({
	type: types.SET_ASSEMBLY_SIZE,
	assemblySize
});

// * setLanguage
export const setLanguage = (language: string) => ({
	type: types.SET_LANGUAGE,
	language
});

// * setThemeConfig
export const setThemeConfig = (themeConfig: ThemeConfigProp) => ({
	type: types.SET_THEME_CONFIG,
	themeConfig
});

export const setUserInfo = (userInfo: any) => ({
	type: types.SET_USERINFO,
	userInfo
});

export const setEntireRoles = (entireRoles: any) => ({
	type: types.SET_ENTIRE_ROLES,
	entireRoles
});
export const setEntireDepartments = (entireDepartments: any) => ({
	type: types.SET_ENTIRE_DEPATMENT,
	entireDepartments
});
export const setEntireMenus = (entireMenus: any) => ({
	type: types.SET_ENTIRE_MENUS,
	entireMenus
});
