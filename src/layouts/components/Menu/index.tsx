/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-07 11:14:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-15 17:58:57
 * @FilePath: \react-admin\src\layouts\components\Menu\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu, Spin } from "antd";
import defaultRouter from "@/routers";
import * as Icons from "@ant-design/icons";
import { store } from "@/redux";
import { getUserMenuList } from "@/api/modules/login";
import { margeRoutesToDefRoutes, menuMapToPermissions, menuMapToRoutes } from "@/utils/mapMenu";
import { RouteObject } from "@/routers/interface";
import { getOpenKeys, searchRoute } from "@/utils/utils";
import Logo from "./components/Logo";
import "./index.less";
import { setUserMenuList, setMenuList, setPermissions } from "@/redux/modules/menu/action";
import { connect } from "react-redux";
import { setBreadcrumbList } from "../../../redux/modules/breadcrumb/action";
import { findAllBreadcrumb } from "../../../utils/utils";

interface IProps {
	isCollapse: boolean;
	setBreadcrumbList: typeof setBreadcrumbList;
	setMenuList: typeof setMenuList;
	setUserMenuList: typeof setUserMenuList;
	setPermissions: typeof setPermissions;
	menuList: RouteObject[];
}

const LayoutMenu: FC<IProps> = props => {
	const { pathname } = useLocation();
	const { isCollapse, setBreadcrumbList, setMenuList: setMenuListAction, setUserMenuList, setPermissions } = props;
	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	// 刷新页面菜单保持高亮
	useEffect(() => {
		setSelectedKeys([pathname]);
		isCollapse ? null : setOpenKeys(getOpenKeys(pathname));
	}, [pathname, isCollapse]);

	// 设置当前展开的 submenu
	const onOpenChange = (openKeys: string[]) => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		const latestOpenKey = openKeys[openKeys.length - 1];
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		setOpenKeys([latestOpenKey]);
	};

	// 定义 menu 类型
	type MenuItem = Required<MenuProps>["items"][number];
	const getItem = (
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: "group"
	): MenuItem => {
		return {
			key,
			icon,
			children,
			label,
			type
		} as MenuItem;
	};

	// 动态渲染icon图标
	const customIcons: { [key: string]: any } = Icons;
	const addIcon = (name: string) => {
		return React.createElement(customIcons[name]);
	};

	const deepLoopFloat = (menuList: Menu.UserMenuOptions[], newArr: MenuItem[] = []) => {
		menuList.forEach((item: Menu.UserMenuOptions) => {
			if (!item.children?.length || item.type !== 1)
				return newArr.push(getItem(item.name, item.url, addIcon("PieChartOutlined")));
			newArr.push(getItem(item.name, item.url, addIcon("PieChartOutlined"), deepLoopFloat(item.children)));
		});
		return newArr;
	};

	const [menuList, setMenuList] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState(false);

	const getMenuData = async () => {
		setLoading(true);
		try {
			const { data: userMenuData } = await getUserMenuList(store.getState().global.userInfo.id);
			// 按钮权限
			const permission = menuMapToPermissions(userMenuData ?? []);
			setPermissions(permission);
			setUserMenuList(userMenuData as Menu.UserMenuOptions[]);
			setMenuList(deepLoopFloat(userMenuData as Menu.UserMenuOptions[]));
			const breadcrumbList = findAllBreadcrumb(userMenuData!);
			console.log("breadcrumbList", breadcrumbList);

			setBreadcrumbList(findAllBreadcrumb(userMenuData!));
			const newRoutes = menuMapToRoutes(userMenuData as Menu.UserMenuOptions[]);
			// console.log("newRoutes", newRoutes);
			const router = margeRoutesToDefRoutes(defaultRouter, newRoutes);
			setMenuListAction(router);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getMenuData();
	}, []);

	// 点击当前菜单跳转
	const navigate = useNavigate();
	const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
		const route = searchRoute(key, props.menuList);
		if (route.isLink) window.open(route.isLink, "_blank");
		navigate(key);
	};

	return (
		<div className="menu">
			<Spin spinning={loading} tip="Loading..">
				<Logo></Logo>
				<Menu
					theme="dark"
					mode="inline"
					triggerSubMenuAction="click"
					openKeys={openKeys}
					selectedKeys={selectedKeys}
					items={menuList}
					onClick={clickMenu}
					onOpenChange={onOpenChange}
				></Menu>
			</Spin>
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { setMenuList, setUserMenuList, setPermissions, setBreadcrumbList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu);
