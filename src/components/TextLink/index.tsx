/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-08 14:41:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-08 16:14:44
 * @FilePath: \react-admin\src\components\TextLink\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Typography } from "antd";
import { TextLink } from "./interface";
import "./index.less";
const { Text, Link } = Typography;
const App: React.FC<{ textLinkArr: TextLink[] }> = (props: any) => {
	const { textLinkArr } = props;
	return (
		<div className="text-link">
			{textLinkArr.map((item: TextLink) => (
				<div className="item" key={item.title}>
					<span className="title">{item.title}</span>
					<Link>{item.desp}</Link>
				</div>
			))}
		</div>
	);
};

export default App;
