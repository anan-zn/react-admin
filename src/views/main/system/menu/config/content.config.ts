/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-17 10:18:11
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-17 14:21:15
 * @FilePath: \react-admin\src\views\main\system\menu\config\content.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const contentTableConfig = {
	title: "角色列表",
	propList: [
		{ dataIndex: "name", key: "name", title: "菜单名称", minWidth: "150" },
		{ dataIndex: "type", key: "type", title: "级别", minWidth: "80" },
		{ dataIndex: "url", key: "url", title: "菜单url", minWidth: "120" },
		{ dataIndex: "icon", key: "icon", title: "菜单icon", minWidth: "120" },
		{ dataIndex: "sort", key: "sort", title: "排序", minWidth: "80" },
		{ dataIndex: "permission", key: "permission", title: "权限", minWidth: "150" },
		{ dataIndex: "createAt", key: "createAt", title: "创建时间", minWidth: "220", slotName: "create" },
		{ dataIndex: "updateAt", key: "updateAt", title: "更新时间", minWidth: "220", slotName: "update" },
		{ title: "操作", minWidth: "120", slotName: "handler" }
	],
	showIndexColumn: false,
	showSelectColumn: false,
	showFooter: false,
	childrenProps: {
		rowKey: "id",
		treeProp: {
			children: "children"
		}
	}
};
