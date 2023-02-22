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

/**
 * @description 递归当前路由的 所有 关联的路由，生成面包屑导航栏
 * @param {String} path 当前访问地址
 * @param {Array} menuList 菜单列表
 * @returns array
 */
export const getBreadcrumbList = (path: string, menuList: Menu.UserMenuOptions[]) => {
	const tempPath: any[] = [];
	try {
		const getNodePath = (node: Menu.UserMenuOptions) => {
			tempPath.push(node);
			// 找到符合条件的节点，通过throw终止掉递归
			if (node.url === path) {
				throw new Error("GOT IT!");
			}
			if (node.children && node.children.length > 0) {
				for (let i = 0; i < node.children.length; i++) {
					getNodePath(node.children[i]);
				}
				// 当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
				tempPath.pop();
			} else {
				// 找到叶子节点时，删除路径当中的该叶子节点
				tempPath.pop();
			}
		};
		for (let i = 0; i < menuList.length; i++) {
			getNodePath(menuList[i]);
		}
	} catch (e) {
		return tempPath.map(item => item.name);
	}
};

/**
 * @description 双重递归 找出所有 面包屑 生成对象存到 redux 中，就不用每次都去递归查找了
 * @param {String} menuList 当前菜单列表
 * @returns object
 */
export const findAllBreadcrumb = (menuList: Menu.UserMenuOptions[]): { [key: string]: any } => {
	const handleBreadcrumbList: any = {};
	const loop = (menuItem: Menu.UserMenuOptions) => {
		// 下面判断代码解释 *** !item?.children?.length   ==>   (item.children && item.children.length > 0)
		if (menuItem?.children?.length && menuItem.type === 1) menuItem.children.forEach(item => loop(item));
		else handleBreadcrumbList[menuItem.url] = getBreadcrumbList(menuItem.url, menuList);
	};
	menuList.forEach(item => loop(item));
	return handleBreadcrumbList;
};
