/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-03 17:18:15
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-07 10:59:52
 * @FilePath: \react-admin\src\redux\modules\tabs\action.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MenuState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

// * setisCollapse
export const updateCollapse = (isCollapse: boolean) => ({
	type: types.UPDATE_COLLAPSE,
	isCollapse
});

// * setTabsActive
export const setMenuList = (menuList: Menu.MenuOptions[]) => ({
	type: types.SET_MENU_LIST,
	menuList
});

// * setTabsActive
export const setUserMenuList = (userMenuList: Menu.UserMenuOptions[]) => ({
	type: types.SET_USER_MENU_LIST,
	userMenuList
});
