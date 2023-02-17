import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FC } from "react";
import Cu from "../CountUp";
import "./index.less";
export interface SpProps {
	panelData: { title: string; tips: string; number1: number; number2: number; amount: string; subtitle: string };
}

const Sp: FC<SpProps> = ({ panelData }) => {
	console.log("panelData", panelData);
	const counterOption1 = {
		decimalPlaces: 0, // 保留两位
		prefix: "" // 单位
	};
	const counterOption2 = {
		decimalPlaces: 0, // 保留两位
		prefix: "￥" // 单位
	};
	return (
		<div className="statistical">
			<div className="header">
				<span>{panelData.title}</span>
				<Tooltip title={panelData.tips} placement="rightTop">
					<InfoCircleOutlined />
				</Tooltip>
			</div>
			<div className="content">
				<Cu number={panelData.number1} option={panelData.amount === "saleroom" ? counterOption2 : counterOption1}></Cu>
			</div>
			<div className="footer">
				<span>
					{panelData.subtitle}
					<Cu number={panelData.number2} option={panelData.amount === "saleroom" ? counterOption2 : counterOption1}></Cu>
				</span>
			</div>
		</div>
	);
};

export default Sp;
