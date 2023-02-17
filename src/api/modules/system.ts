/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 16:57:07
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-16 17:45:16
 * @FilePath: \react-admin\src\api\modules\system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from "@/api";
import { ResultData } from "../interface";
export function getPageList<T = any>(pageUrl: string, queryInfo: any): Promise<ResultData<T>> {
	return http.post<T>(pageUrl, queryInfo);
}

export function deletePageData(pageUrl: string) {
	return http.delete(pageUrl);
}

export function newPageData(pageUrl: string, newData: any) {
	return http.post(pageUrl, newData);
}

export function editPageData(pageUrl: string, editData: any) {
	return http.patch(pageUrl, editData);
}
