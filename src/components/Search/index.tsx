import ZnForm from "../Form";
import { IForm } from "../Form/interface";
import { Button } from "antd";
import { FC, useState } from "react";
import "./index.less";
import React from "react";
import { SearchOutlined, RedoOutlined } from "@ant-design/icons";
interface SearchProps {
	searchConfig: IForm;
	title?: string;
	onQuery: (otherInfo: any) => void;
}
interface IFormData {
	[key: string]: any;
}
const Search: FC<SearchProps> = ({ searchConfig, title, onQuery }) => {
	const originFormData: IFormData = {};
	const formItems = searchConfig.formItems ?? [];
	for (const formItem of formItems) {
		originFormData[`${formItem.field}`] = "";
	}

	const [formData, setFormData] = useState<IFormData>({ ...originFormData });
	const Footer = () => {
		const handleResetClick = () => {
			console.log("reset");
		};
		const handleQueryClick = () => {
			onQuery(formData);
		};
		return (
			<div className="btns">
				<Button size="middle" icon={<RedoOutlined />} onClick={handleResetClick}>
					重置
				</Button>
				<Button type="primary" size="middle" icon={<SearchOutlined />} onClick={handleQueryClick}>
					查询
				</Button>
			</div>
		);
	};
	return <ZnForm {...searchConfig} footer={Footer()} formData={formData} setFormData={setFormData}></ZnForm>;
};

export default Search;
