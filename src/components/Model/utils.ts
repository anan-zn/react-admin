import { editPageData, newPageData } from "@/api/modules/system";
import { getPageData, IPagePayload } from "../Content/utils";

export async function editPageDataAction(payload: IPagePayload) {
	if (!payload.id) return;
	const pageUrl = `/${payload.pageName}/${payload.id}`;
	const pageData = payload.queryInfo;
	await editPageData(pageUrl, pageData);

	await getPageData({
		pageName: payload.pageName,
		queryInfo: { offset: 0, size: 10 }
	});
}

export async function newPageDataAction(payload: IPagePayload) {
	const pageUrl = `/${payload.pageName}`;
	const pageData = payload.queryInfo;
	await newPageData(pageUrl, pageData);

	await getPageData({
		pageName: payload.pageName,
		queryInfo: { offset: 0, size: 10 }
	});
}
