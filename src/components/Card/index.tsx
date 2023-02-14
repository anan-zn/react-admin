/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-08 09:46:15
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 10:52:36
 * @FilePath: \react-admin\src\components\Card\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Card, Space } from "antd";
import React from "react";

interface ZnCardProps {
	title?: string;
	extra?: any;
	children?: JSX.Element | JSX.Element[];
}

const ZnCard: React.FC<ZnCardProps> = ({ title, extra, children }) => {
	return (
		<Space direction="horizontal" size={16} style={{ width: "100%" }}>
			<Card title={title ? title : "默认标题"} extra={extra ? extra : <a href="#">More</a>} style={{ width: "100%" }}>
				{children}
			</Card>
		</Space>
	);
};

export default ZnCard;
