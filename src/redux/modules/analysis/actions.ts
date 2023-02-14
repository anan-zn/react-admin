/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-13 16:11:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 17:44:47
 * @FilePath: \react-admin\src\redux\modules\analysis\actions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as types from "@/redux/mutation-types";

// * setisCollapse
export const setTopPanelDatas = (topPanelDatas: unknown) => ({
	type: types.SET_TOP_PANEL_DATAS,
	topPanelDatas
});

// * setTabsActive
export const setCategoryGoodsCount = (categoryGoodsCount: unknown) => ({
	type: types.SET_GATEORY_GOODS_COUNT,
	categoryGoodsCount
});

// * setTabsActive
export const setCategoryGoodsSale = (categoryGoodsSale: unknown) => ({
	type: types.SET_CATEGORY_GOODS_SALE,
	categoryGoodsSale
});

export const setcategoryGoodsFavor = (categoryGoodsFavor: unknown) => ({
	type: types.SET_CATEGORY_GOODS_FAVOR,
	categoryGoodsFavor
});

export const setGoodsSaleTop10 = (goodsSaleTop10: unknown) => ({
	type: types.GOODS_SALE_TOP10,
	goodsSaleTop10
});

export const setGoodsAddressSale = (goodsAddressSale: unknown) => ({
	type: types.GOODS_ADDRESS_SALE,
	goodsAddressSale
});
