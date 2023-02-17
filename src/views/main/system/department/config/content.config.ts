/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-17 09:56:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-17 14:19:22
 * @FilePath: \react-admin\src\views\main\system\department\config\content.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const contentTableConfig = {
	title: "部门列表",
	propList: [
		{ key: "name", dataIndex: "name", title: "部门名称", minWidth: "120" },
		{ key: "leader", dataIndex: "leader", title: "部门领导", minWidth: "120" },
		{ key: "parentId", dataIndex: "parentId", title: "上级部门", minWidth: "120" },
		{ key: "createAt", dataIndex: "createAt", title: "创建时间", minWidth: "250", slotName: "create" },
		{ key: "updateAt", dataIndex: "updateAt", title: "更新时间", minWidth: "250", slotName: "update" },
		{ title: "操作", minWidth: "120", slotName: "handler" }
	],
	showIndexColumn: true,
	showSelectColumn: true
};
