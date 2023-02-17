/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-17 10:37:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-17 14:17:19
 * @FilePath: \react-admin\src\views\main\system\role\config\content.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const contentTableConfig = {
	title: "角色列表",
	newBtnTitle: "新建角色",
	propList: [
		{ dataIndex: "name", key: "name", title: "角色名称", minWidth: "120" },
		{ dataIndex: "intro", key: "intro", title: "角色权限", minWidth: "120" },
		{ dataIndex: "createAt", key: "createAt", title: "创建时间", minWidth: "250", slotName: "create" },
		{ dataIndex: "updateAt", key: "updateAt", title: "更新时间", minWidth: "250", slotName: "update" },
		{ title: "操作", minWidth: "120", slotName: "handler" }
	],
	showIndexColumn: true,
	showSelectColumn: true
};
