/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-15 13:31:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-15 14:14:02
 * @FilePath: \react-admin\src\redux\modules\system\reducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AnyAction } from "redux";
import produce from "immer";
import { SystemState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

const systemState: SystemState = {
	usersTotalCount: 0,
	usersList: [],
	departmentTotalCount: 0,
	departmentList: [],
	roleTotalCount: 0,
	roleList: [],
	menuList: [],
	categoryTotalCount: 0,
	categoryList: [],
	goodsTotalCount: 0,
	goodsList: [],
	storyTotalCount: 0,
	storyList: []
};

// menu redcuer
const menu = (state: SystemState = systemState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_USERS_TOTAL_COUNT:
				draftState.usersTotalCount = action.usersTotalCount;
				break;
			case types.SET_USERS_LIST:
				draftState.usersList = action.usersList;
				break;
			case types.SET_DEPARTMENT_TOTAL_COUNT:
				draftState.departmentTotalCount = action.departmentTotalCount;
				break;
			case types.SET_DEPARTMEN_LIST:
				draftState.departmentList = action.departmentList;
				break;
			case types.SET_ROLE_TOTAL_COUNT:
				draftState.roleTotalCount = action.roleTotalCount;
				break;
			case types.SET_ROLELIST:
				draftState.roleList = action.roleList;
				break;
			case types.SET_MENU_LIST_:
				draftState.menuList = action.menuList;
				break;
			case types.SET_CATEGORY_TOTAL_COUNT:
				draftState.categoryTotalCount = action.categoryTotalCount;
				break;
			case types.SET_CATEGORY_LIST:
				draftState.categoryList = action.categoryList;
				break;
			case types.SET_GOODS_TOTAL_COUNT:
				draftState.goodsTotalCount = action.goodsTotalCount;
				break;
			case types.SET_GOODS_LIST:
				draftState.goodsList = action.goodsList;
				break;
			case types.SET_STORY_TOTAL_COUNT:
				draftState.storyTotalCount = action.storyTotalCount;
				break;
			case types.SET_STORY_LIST:
				draftState.storyList = action.storyList;
				break;
			default:
				return draftState;
		}
	});

export default menu;
