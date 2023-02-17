import { Form, Row, Col, Input, Select, DatePicker } from "antd";
import { ColProps } from "antd/es/grid/col";
import { CSSProperties, Dispatch, FC, SetStateAction } from "react";
import { IFormItem } from "./interface";
import "./index.less";
interface IFormData {
	[key: string]: any;
}

interface ZnFormProps {
	header?: JSX.Element;
	footer?: JSX.Element;
	formItems: IFormItem[];
	formData: Record<string, any>;
	itemStyle: CSSProperties;
	colLayout: ColProps;
	setFormData: Dispatch<SetStateAction<IFormData>>;
}

const ZnForm: FC<ZnFormProps> = ({ header, footer, formData, formItems, itemStyle, colLayout, setFormData }) => {
	const onFormItemChange = (val: string | moment.Moment | null | number, field: string) => {
		formData[`${field}`] = val;
		setFormData({ ...formData });
	};
	return (
		<div className="hy-form">
			<div className="header">{header}</div>
			<Form>
				<Row>
					{formItems.map((item: IFormItem, index) => {
						return (
							<Col key={index} {...colLayout}>
								<Form.Item hidden={item.isHidden} label={item.label} rules={item.rules} className="form-item" style={itemStyle}>
									{(function () {
										switch (item.type) {
											case "input":
												return (
													<Input
														onChange={e => onFormItemChange(e.target.value, item.field)}
														placeholder={item.placeholder}
														value={formData[`${item.field}`]}
													></Input>
												);
											case "password":
												return (
													<Input.Password
														onChange={e => onFormItemChange(e.target.value, item.field)}
														placeholder={item.placeholder}
														value={formData[`${item.field}`]}
													></Input.Password>
												);
											case "select":
												return (
													<Select
														value={formData[`${item.field}`]}
														onChange={e => onFormItemChange(e, item.field)}
														placeholder={item.placeholder}
														style={{ width: "100%" }}
														options={item.options}
													></Select>
												);
											case "datepicker":
												return (
													<DatePicker
														onChange={e => onFormItemChange(e, item.field)}
														value={formData[`${item.field}`]}
														style={{ width: "100%" }}
													></DatePicker>
												);
										}
									})()}
								</Form.Item>
							</Col>
						);
					})}
				</Row>
			</Form>
			<div className="footer">{footer}</div>
		</div>
	);
};

export default ZnForm;
