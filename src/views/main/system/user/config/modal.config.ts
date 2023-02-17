/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-16 16:18:01
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-16 16:18:43
 * @FilePath: \react-admin\src\views\main\system\user\config\modal.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IForm } from "@/components/Form/interface";

export const modalConfig: IForm = {
	title: "新建用户",
	formItems: [
		{ field: "name", type: "input", label: "用户名", placeholder: "请输入用户名" },
		{
			field: "realname",
			type: "input",
			label: "真实姓名",
			placeholder: "请输入真实姓名",
			rules: [{ required: true }]
		},
		{
			field: "password",
			type: "password",
			label: "密码",
			placeholder: "请输入密码",
			isHidden: false
		},
		{ field: "cellphone", type: "input", label: "电话号码", placeholder: "请输入电话号码" },
		{ field: "roleId", type: "select", label: "选择角色", placeholder: "请选择角色", options: [] },
		{
			field: "departmentId",
			type: "select",
			label: "选择部门",
			placeholder: "请选择部门",
			options: []
		}
	],
	colLayout: { span: 24 },
	itemStyle: { padding: 0 }
};
