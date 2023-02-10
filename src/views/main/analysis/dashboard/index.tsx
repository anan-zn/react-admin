import React from "react";
import { Col, Divider, Row } from "antd";
import Sp from "@/components/StatisticalPanel";
// import Cu from "@/components/CountUp";
import { PieEchart, MapEchart, RoseEchart, LineEchart, BarEchart } from "@/components/page-charts";
import ZnCard from "@/components/Card";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const App: React.FC = () => (
	<div className="dashboard">
		<Row gutter={16}>
			{topPanelData.map(item => {
				<Col key={item.title}>
					<Sp panelData={item}></Sp>
				</Col>;
			})}
		</Row>
		<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
			<Col className="gutter-row" span={6}>
				<ZnCard title="分类商品数量(饼图)">
					<PieEchart pieData={categoryGoodsCount}></PieEchart>
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
					<LineEchart pieData={categoryGoodsSale}></PieEchart>
				</ZnCard>
			</Col>
			<Col className="gutter-row" span={6}>
				<ZnCard title="分类商品的收藏">
					<BarEchart data={categoryGoodsSale}></MapEchart>
				</ZnCard>
			</Col>
		</Row>
	</div>
);

export default App;
