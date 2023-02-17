/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-02 13:25:30
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-15 13:41:26
 * @FilePath: \react-admin\src\redux\interface\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { SizeType } from "antd/lib/config-provider/SizeContext";

/* themeConfigProp */
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	weakOrGray: string;
	breadcrumb: boolean;
	tabs: boolean;
	footer: boolean;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize: SizeType;
	language: string;
	themeConfig: ThemeConfigProp;
	entireRoles: any[];
	entireDepartments: any[];
	entireMenus: any[];
}

export interface AnalysisState {
	topPanelDatas: any[];
	categoryGoodsCount: any[];
	categoryGoodsSale: any[];
	categoryGoodsFavor: any[];
	goodsSaleTop10: any[];
	goodsAddressSale: any[];
}

/* MenuState */
export interface MenuState {
	isCollapse: boolean;
	menuList: Menu.MenuOptions[];
	userMenuList: Menu.UserMenuOptions[];
	permissions: any[];
}

/* TabsState */
export interface TabsState {
	tabsActive: string;
	tabsList: Menu.MenuOptions[];
}

export interface SystemState {
	usersTotalCount: number;
	usersList: any[];
	departmentTotalCount: number;
	departmentList: any[];
	roleTotalCount: number;
	roleList: any[];
	menuList: any[];
	categoryTotalCount: number;
	categoryList: any[];
	goodsTotalCount: number;
	goodsList: any[];
	storyTotalCount: number;
	storyList: any[];
}

/* BreadcrumbState */
export interface BreadcrumbState {
	breadcrumbList: {
		[propName: string]: any;
	};
}

/* AuthState */
export interface AuthState {
	authButtons: {
		[propName: string]: any;
	};
	authRouter: string[];
}
