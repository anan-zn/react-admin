/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-02 13:20:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-06 16:53:16
 * @FilePath: \react-admin\src\redux\modules\global\reducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AnyAction } from "redux";
import produce from "immer";
import { MenuState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

const menuState: MenuState = {
	isCollapse: true,
	menuList: [],
	userMenuList: [
		{
			id: 38,
			name: "系统总览",
			type: 1,
			url: "/main/analysis",
			icon: "el-icon-monitor",
			sort: 1,
			children: [
				{
					id: 39,
					url: "/main/analysis/overview",
					name: "核心技术",
					sort: 106,
					type: 2,
					children: null,
					parentId: 38
				},
				{
					id: 40,
					url: "/main/analysis/dashboard",
					name: "商品统计",
					sort: 107,
					type: 2,
					children: null,
					parentId: 38
				}
			]
		}
	]
};

// menu redcuer
const menu = (state: MenuState = menuState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.UPDATE_COLLAPSE:
				draftState.isCollapse = action.isCollapse;
				break;
			case types.SET_MENU_LIST:
				draftState.menuList = action.menuList;
				break;
			case types.SET_USER_MENU_LIST:
				draftState.userMenuList = action.userMenuList;
				break;
			default:
				return draftState;
		}
	});

export default menu;
