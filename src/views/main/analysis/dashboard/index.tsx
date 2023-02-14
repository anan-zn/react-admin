import React, { useEffect, useMemo } from "react";
import { Col, Divider, Row } from "antd";
import Sp from "@/components/StatisticalPanel";
// import Cu from "@/components/CountUp";
import { PieEchart, MapEchart, RoseEchart, LineEchart, BarEchart } from "@/components/page-charts";
import ZnCard from "@/components/Card";
import getAnalysisData from "./utils/getAnalysisData";
import { store } from "@/redux";
import { connect } from "react-redux";
import * as api from "@/api/modules/analysis";
import * as analysisActions from "@/redux/modules/analysis/actions";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const DashBoard: React.FC = (props: any) => {
	const {
		setTopPanelDatas,
		setCategoryGoodsCount,
		setCategoryGoodsSale,
		setcategoryGoodsFavor,
		setGoodsSaleTop10,
		setGoodsAddressSale
	} = props;
	async function getAnalysisData() {
		const resultTopPanelDatas = await api.getAmountList();
		setTopPanelDatas(resultTopPanelDatas.data);

		const goodsCount = await api.getCategoryGoodsCount();
		setCategoryGoodsCount(goodsCount.data);

		const goodsSale = await api.getCategoryGoodsSale();
		setCategoryGoodsSale(goodsSale.data);

		const goodsFavor = await api.getCategoryGoodsFavor();
		setcategoryGoodsFavor(goodsFavor.data);

		const saleTop10 = await api.getGoodsSaleTop10();
		setGoodsSaleTop10(saleTop10.data);

		const addressSasle = await api.getGoodsAddressSale();
		setGoodsAddressSale(addressSasle.data);
	}
	useEffect(() => {
		getAnalysisData();
	}, []);

	const topPanelData = useMemo(() => store.getState().analysis.topPanelDatas, []);
	const categoryGoodsCount = useMemo(() => {
		console.log("store.getState().analysis", store.getState().analysis);
		return store.getState().analysis.categoryGoodsCount.map((item: any) => {
			return { value: item.goodsCount, name: item.name };
		});
	}, []);
	const goodsSaleTop10 = useMemo(() => {
		return store.getState().analysis.goodsSaleTop10.map((item: any) => {
			return { value: item.saleCount, name: item.name };
		});
	}, []);
	const categoryGoodsSale = useMemo(() => {
		const goodsSale = store.getState().analysis.categoryGoodsSale;
		const labels: string[] = [];
		const values: any[] = [];
		for (const item of goodsSale) {
			labels.push(item.name);
			values.push(item.goodsCount);
		}
		return { labels, values };
	}, []);
	const addressGoodsSale = useMemo(() => {
		return store.getState().analysis.goodsAddressSale.map((item: any) => {
			return { value: item.count, name: item.address };
		});
	}, []);
	return (
		<div className="dashboard">
			<Row gutter={16}>
				{topPanelData.map((item: { title: string; tips: string }) => {
					<Col key={item.title}>
						<Sp panelData={item}></Sp>
					</Col>;
				})}
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col className="gutter-row" span={6}>
					<ZnCard title="分类商品数量(饼图)">
						<PieEchart data={categoryGoodsCount}></PieEchart>
					</ZnCard>
				</Col>
				<Col className="gutter-row" span={6}>
					<ZnCard title="不同城市商品销量">
						<MapEchart data={addressGoodsSale}></MapEchart>
					</ZnCard>
				</Col>
				<Col className="gutter-row" span={6}>
					<ZnCard title="分类商品数量(玫瑰图)">
						<RoseEchart data={categoryGoodsCount}></RoseEchart>
					</ZnCard>
				</Col>
			</Row>
			<Row gutter={[16, 24]}>
				<Col className="gutter-row" span={6}>
					<ZnCard title="分类商品的销量">
						<LineEchart data={categoryGoodsSale}></LineEchart>
					</ZnCard>
				</Col>
				<Col className="gutter-row" span={6}>
					<ZnCard title="分类商品的收藏">
						<BarEchart data={categoryGoodsSale}></BarEchart>
					</ZnCard>
				</Col>
			</Row>
		</div>
	);
};

const mapDispatchToProps = { ...analysisActions };
export default connect(null, mapDispatchToProps)(DashBoard);
