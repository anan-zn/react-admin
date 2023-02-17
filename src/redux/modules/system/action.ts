/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-03 17:18:15
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-15 14:12:52
 * @FilePath: \react-admin\src\redux\modules\tabs\action.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MenuState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";
import { RouteObject } from "@/routers/interface";
export function setUsersTotalCount(totalCount: number) {
	return { type: types.SET_USERS_TOTAL_COUNT, usersTotalCount: totalCount };
}
export function setUsersList(userList: any) {
	return { type: types.SET_USERS_LIST, usersList: userList };
}
export function setDepartmentTotalCount(totalCount: number) {
	return { type: types.SET_DEPARTMENT_TOTAL_COUNT, departmentTotalCount: totalCount };
}
export function setDepartmentList(departmentList: any) {
	return { type: types.SET_DEPARTMEN_LIST, departmentList: departmentList };
}
export function setRoleTotalCount(totalCount: number) {
	return { type: types.SET_ROLE_TOTAL_COUNT, roleTotalCount: totalCount };
}
export function setRoleList(roleList: any) {
	return { type: types.SET_ROLELIST, roleList: roleList };
}
export function setMenuList(menuList: any) {
	return { type: types.SET_MENU_LIST_, menuList: menuList };
}
export function setCategoryTotalCount(totalCount: number) {
	return { type: types.SET_CATEGORY_TOTAL_COUNT, categoryTotalCount: totalCount };
}
export function setCategoryList(roleList: any) {
	return { type: types.SET_CATEGORY_LIST, categoryList: roleList };
}
export function setGoodsTotalCount(totalCount: number) {
	return { type: types.SET_GOODS_TOTAL_COUNT, goodsTotalCount: totalCount };
}
export function setGoodsList(roleList: any) {
	return { type: types.SET_GOODS_LIST, goodsList: roleList };
}
export function setStoryTotalCount(totalCount: number) {
	return { type: types.SET_STORY_TOTAL_COUNT, storyTotalCount: totalCount };
}
export function setStoryList(storyList: any) {
	return { type: types.SET_STORY_LIST, storyList: storyList };
}
