import * as api from "@/api/modules/analysis";
import * as analysisActions from "@/redux/modules/analysis/actions";
export default async function getAnalysisData() {
	const resultTopPanelDatas = await api.getAmountList();
	analysisActions.setTopPanelDatas(resultTopPanelDatas.data);

	const goodsCount = await api.getCategoryGoodsCount();
	analysisActions.setCategoryGoodsCount(goodsCount.data);

	const goodsSale = await api.getCategoryGoodsSale();
	analysisActions.setCategoryGoodsSale(goodsSale.data);

	const goodsFavor = await api.getCategoryGoodsFavor();
	analysisActions.setcategoryGoodsFavor(goodsFavor.data);

	const saleTop10 = await api.getGoodsSaleTop10();
	analysisActions.setGoodsSaleTop10(saleTop10.data);

	const addressSasle = await api.getGoodsAddressSale();
	analysisActions.setGoodsAddressSale(addressSasle.data);
}
