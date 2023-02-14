/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-09 10:56:26
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 11:16:43
 * @FilePath: \react-admin\src\components\StatisticalPanel\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FC } from "react";

interface SpProps {
	panelData: { title: string; tips: string };
}

const Sp: FC<SpProps> = ({ panelData }) => {
	return (
		<div className="statistical">
			<div className="header">
				<span>{panelData.title}</span>
				<Tooltip title={panelData.tips} placement="rightTop">
					<InfoCircleOutlined />
				</Tooltip>
			</div>
			<div className="content"></div>
			<div className="footer"></div>
		</div>
	);
};

export default Sp;
