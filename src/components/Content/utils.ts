import { deletePageData, getPageList } from "@/api/modules/system";
import { store } from "@/redux";
import * as actions from "@/redux/modules/system/action";
export interface IPagePayload {
	pageName: string;
	// pageUrl: string
	queryInfo?: any;
	id?: number;
}
export async function getPageData(payload: IPagePayload) {
	const pageName = payload.pageName;
	const pageUrl = `/${pageName}/list`;
	if (pageUrl.length === 0) return;
	const { data } = await getPageList<{ totalCount: number; list: any[] }>(pageUrl, payload.queryInfo);
	const { totalCount, list } = data!;
	console.log(totalCount, list);
	switch (payload.pageName) {
		case "users":
			store.dispatch(actions.setUsersList(list));
			store.dispatch(actions.setUsersTotalCount(totalCount));
			break;
		case "department":
			store.dispatch(actions.setDepartmentList(list));
			store.dispatch(actions.setDepartmentTotalCount(totalCount));
			break;
		case "role":
			store.dispatch(actions.setRoleList(list));
			store.dispatch(actions.setRoleTotalCount(totalCount));
			break;
		case "menu":
			store.dispatch(actions.setMenuList(list));
			break;
		case "category":
			store.dispatch(actions.setCategoryList(list));
			store.dispatch(actions.setCategoryTotalCount(totalCount));
			break;
		case "goods":
			store.dispatch(actions.setGoodsList(list));
			store.dispatch(actions.setGoodsTotalCount(totalCount));
			break;
		case "story":
			store.dispatch(actions.setStoryList(list));
			store.dispatch(actions.setStoryTotalCount(totalCount));
			break;
	}
}

export async function deletePageDataAction(payload: IPagePayload) {
	const pageName = payload.pageName;
	const deleteId = payload.id;
	if (!deleteId) return;
	const pageUrl = `/${pageName}/${deleteId}`;
	await deletePageData(pageUrl);
	await getPageData({
		pageName: payload.pageName,
		queryInfo: { offset: 0, size: 10 }
	});
}
