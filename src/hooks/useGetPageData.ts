import { Dispatch, RefObject, SetStateAction, useRef } from "react";

/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-15 16:18:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-16 17:52:51
 * @FilePath: \react-admin\src\hooks\useGetPageData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IContentHandler {
	getData: (otherInfo: any) => void;
}

export function useGetPageData(): [RefObject<IContentHandler>, (otherInfo?: any) => void] {
	const pageContentRef = useRef<IContentHandler>(null);
	const handleQueryClick = (otherInfo: any = {}) => {
		pageContentRef.current?.getData(otherInfo);
	};
	return [pageContentRef, handleQueryClick];
}
