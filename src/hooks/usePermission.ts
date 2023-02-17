/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-15 11:58:26
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-16 14:01:31
 * @FilePath: \react-admin\src\hooks\usePermission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { store } from "@/redux";

export function usePermission(pageName: string, handle: string) {
	const permissions = store.getState().menu.permissions;
	const handlePermission = `${pageName}:${handle}`;
	return !!permissions.find((item: string) => item.indexOf(handlePermission) !== -1);
}
