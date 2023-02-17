/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-02 13:20:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-14 17:40:29
 * @FilePath: \react-admin\src\redux\modules\global\reducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AnyAction } from "redux";
import produce from "immer";
import { GlobalState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

const globalState: GlobalState = {
	token: "",
	userInfo: {
		id: null,
		name: ""
	},
	assemblySize: "middle",
	language: "",
	themeConfig: {
		// 默认 primary 主题颜色
		primary: "#1890ff",
		// 深色模式
		isDark: false,
		// 色弱模式(weak) || 灰色模式(gray)
		weakOrGray: "",
		// 面包屑导航
		breadcrumb: true,
		// 标签页
		tabs: true,
		// 页脚
		footer: true
	},
	entireRoles: [],
	entireDepartments: [],
	entireMenus: []
};

// gloval redcuer
const global = (state: GlobalState = globalState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_TOKEN:
				draftState.token = action.token;
				break;
			case types.SET_ASSEMBLY_SIZE:
				draftState.assemblySize = action.assemblySize;
				break;
			case types.SET_LANGUAGE:
				draftState.language = action.language;
				break;
			case types.SET_THEME_CONFIG:
				draftState.themeConfig = action.themeConfig;
				break;
			case types.SET_USERINFO:
				draftState.userInfo = action.userInfo;
				break;
			case types.SET_ENTIRE_DEPATMENT:
				draftState.entireDepartments = action.entireDepartments;
				break;
			case types.SET_ENTIRE_MENUS:
				draftState.entireMenus = action.entireMenus;
				break;
			case types.SET_ENTIRE_ROLES:
				draftState.entireRoles = action.entireRoles;
				break;
			default:
				return draftState;
		}
	});

export default global;
