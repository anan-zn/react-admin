/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-20 10:57:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-20 10:59:19
 * @FilePath: \react-admin\src\views\main\product\goods\config\search.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IForm } from "@/components/Form/interface";

export const searchFormConfig: IForm = {
	formItems: [
		{
			field: "name",
			type: "input",
			label: "商品名称",
			placeholder: "请输入商品名称",
			rules: []
		},
		{
			field: "address",
			type: "input",
			label: "商品地址",
			placeholder: "请输入商品地址",
			rules: []
		},
		{
			field: "enable",
			type: "select",
			label: "状态",
			placeholder: "请选择状态",
			rules: [],
			options: [
				{ label: "可用", value: 1 },
				{ label: "下架", value: 0 }
			]
		},
		{
			field: "createAt",
			type: "datepicker",
			label: "创建时间",
			rules: [],
			otherOption: {
				startPlaceholder: "开始时间",
				endPlaceholder: "结束时间",
				type: "daterange"
			}
		}
	],
	labelWidth: "100px",
	itemStyle: { padding: "10px 40px" },
	colLayout: { span: 8 }
};
