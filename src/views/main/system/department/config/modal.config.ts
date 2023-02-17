/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-17 09:56:07
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-17 10:03:45
 * @FilePath: \react-admin\src\views\main\system\department\config\modal.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IForm } from "@/components/Form/interface";

export const modalConfig: IForm = {
	title: "新建部门",
	formItems: [
		{ field: "name", type: "input", label: "部门名称", placeholder: "请输入部门名称" },
		{
			field: "parentId",
			type: "select",
			label: "上级部门",
			placeholder: "请选择上级部门",
			options: []
		},
		{ field: "leader", type: "input", label: "领导名称", placeholder: "请输入领导名称" }
	],
	colLayout: { span: 24 },
	itemStyle: { padding: 0 }
};
