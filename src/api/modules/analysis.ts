import http from "@/api";
enum AnalysisAPI {
	amountList = "/goods/amount/list",
	categoryGoodsCount = "/goods/category/count",
	categoryGoodsSale = "/goods/category/sale",
	categoryGoodsFavor = "/goods/category/favor",
	goodsSaleTop10 = "/goods/sale/top10",
	goodsAddressSale = "/goods/address/sale"
}

export function getAmountList() {
	return http.get(AnalysisAPI.amountList);
}

export function getCategoryGoodsCount() {
	return http.get(AnalysisAPI.categoryGoodsCount);
}

export function getCategoryGoodsSale() {
	return http.get(AnalysisAPI.categoryGoodsSale);
}

export function getCategoryGoodsFavor() {
	return http.get(AnalysisAPI.categoryGoodsFavor);
}

export function getGoodsSaleTop10() {
	return http.get(AnalysisAPI.goodsSaleTop10);
}

export function getGoodsAddressSale() {
	return http.get(AnalysisAPI.goodsAddressSale);
}
