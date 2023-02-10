/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-08 13:20:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-08 15:39:46
 * @FilePath: \react-admin\src\components\Descriptions\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Badge, Descriptions, Tag } from "antd";
import { DescriptionProp } from "./interface";
const App: React.FC<{ title?: string; descriptions: DescriptionProp[] }> = (props: any) => {
	const { title, descriptions } = props;
	return (
		<Descriptions title={title} bordered>
			{descriptions.map((item: DescriptionProp) => (
				<Descriptions.Item label={item.name} key={item.name}>
					<Tag color="blue">{item.description}</Tag>
				</Descriptions.Item>
			))}
		</Descriptions>
	);
};

export default App;
