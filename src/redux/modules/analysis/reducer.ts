/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-02 13:20:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-09 14:24:51
 * @FilePath: \react-admin\src\redux\modules\global\reducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AnyAction } from "redux";
import produce from "immer";
import { AnalysisState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

const analysisState: AnalysisState = {
	topPanelDatas: [],
	categoryGoodsCount: [],
	categoryGoodsSale: [],
	categoryGoodsFavor: [],
	goodsSaleTop10: [],
	goodsAddressSale: []
};

// gloval redcuer
const analysis = (state: AnalysisState = analysisState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_TOP_PANEL_DATAS:
				draftState.topPanelDatas = action.topPanelDatas;
				break;
			case types.SET_GATEORY_GOODS_COUNT:
				draftState.categoryGoodsCount = action.categoryGoodsCount;
				break;
			case types.SET_CATEGORY_GOODS_SALE:
				draftState.categoryGoodsSale = action.categoryGoodsSale;
				break;
			case types.SET_CATEGORY_GOODS_FAVOR:
				draftState.categoryGoodsFavor = action.categoryGoodsFavor;
				break;
			case types.GOODS_SALE_TOP10:
				draftState.goodsSaleTop10 = action.goodsSaleTop10;
				break;
			case types.GOODS_ADDRESS_SALE:
				draftState.goodsAddressSale = action.goodsAddressSale;
				break;
			default:
				return draftState;
		}
	});

export default analysis;
