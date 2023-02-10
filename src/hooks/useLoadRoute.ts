/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-06 15:05:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-06 17:46:34
 * @FilePath: \react-admin\src\hooks\useLoadRoute.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from "react";
import defaultRouter from "@/routers";
import { shallowEqual, useSelector } from "react-redux";
import { MenuState } from "@/redux/interface";
import { margeRoutesToDefRoutes, menuMapToRoutes } from "@/utils/mapMenu";
import { useRoutes } from "react-router-dom";
import { store } from "@/redux";
export const useLoadRoute = () => {
	// console.log("defaultRouter", defaultRouter);
	const [routes, setRoutes] = useState(defaultRouter);
	const [userMenuList, setUserMenuList] = useState(store.getState().menu.userMenuList);
	// const { userMenuList } = store.getState().menu;
	console.log("store.getState().menu", store.getState());
	console.log("userMenuList", userMenuList);
	useEffect(() => {
		const newRoutes = menuMapToRoutes(userMenuList);
		// console.log("newRoutes", newRoutes);
		const router = margeRoutesToDefRoutes(routes, newRoutes);
		console.log("router", router);
		setRoutes(router);
	}, [userMenuList]);

	const Router = () => {
		const _routes = useRoutes(routes as any);
		return _routes;
	};

	return Router;
};
