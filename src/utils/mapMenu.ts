import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import { isObject } from "./is";
import React from "react";

let firstMenu: any = undefined;
let firstRoute: RouteObject | undefined = undefined;

// * 导入所有router
const metaRouters: any = import.meta.globEager("../routers/modules/**/**/*.tsx");

export function menuMapToRoutes(userMenus: Menu.UserMenuOptions[]): RouteObject[] {
	const routes: RouteObject[] = [];
	const localRoutes: RouteObject[] = [];
	// console.log("metaRouters", metaRouters);
	Object.keys(metaRouters).forEach(async (item: string) => {
		const module = metaRouters[item].default;
		localRoutes.push(module);
	});
	console.log("localRoutes", localRoutes);
	// 菜单的映射
	const _recurseGetRoute = (menus: Menu.UserMenuOptions[]) => {
		for (const menu of menus) {
			if (menu.type === 2) {
				// debugger;
				const route = localRoutes.find(route => route.path === menu.url);
				if (route) routes.push(route);
				if (!firstRoute && !firstMenu) {
					firstMenu = menu;
					firstRoute = route;
				}
			} else {
				_recurseGetRoute(menu.children ?? []);
			}
		}
	};
	_recurseGetRoute(userMenus);
	return routes;
}

export const margeRoutesToDefRoutes = (defaultRoutes: RouteObject[], routes: RouteObject[]): RouteObject[] => {
	const _defaultRoutes: RouteObject[] = deepCloneRoutes(defaultRoutes);
	const mainRoute = _defaultRoutes.find(route => route.id === "main");
	mainRoute && (mainRoute.children = routes);
	return _defaultRoutes;
};

export function deepCloneRoutes<T>(raw: T): T {
	const copyData: any = Array.isArray(raw) ? [] : {};
	for (const key in raw) {
		const value = raw[key];
		if (!isObject(value) || React.isValidElement(value)) {
			copyData[key] = value;
		} else if (isObject(value)) {
			copyData[key] = deepCloneRoutes(value);
		}
	}
	return copyData;
}
