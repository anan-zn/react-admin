/*
 * @Description:
 * @Version: 2.0
 * @Autor: Zn
 * @Date: 2023-02-01 13:22:14
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-09 09:52:18
 */
/**
 * @description 获取浏览器默认语言
 * @return string
 */

import { RouteObject } from "@/routers/interface";
import { isObject } from "./is";

export const getBrowserLang = () => {
	const browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
	let defaultBrowserLang = "";
	if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
		defaultBrowserLang = "zh";
	} else {
		defaultBrowserLang = "en";
	}
	return defaultBrowserLang;
};

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
	let result: RouteObject = {};
	for (const item of routes) {
		if (item.path === path) return item;
		if (item.children) {
			const res = searchRoute(path, item.children);
			if (Object.keys(res).length) result = res;
		}
	}
	return result;
};

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path: string) => {
	let newStr = "";
	const newArr: any[] = [];
	const arr = path.split("/").map(i => "/" + i);
	for (let i = 1; i < arr.length - 1; i++) {
		newStr += arr[i];
		newArr.push(newStr);
	}
	return newArr;
};

export const handleRouter = (userMenuList: Menu.UserMenuOptions[], newArr: any[] = []) => {
	userMenuList.forEach(menu => {
		isObject(menu) && menu.url && newArr.push(menu.url);
		menu.children && menu.children.length && handleRouter(menu.children, newArr);
	});
	return newArr;
};
