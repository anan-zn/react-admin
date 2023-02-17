/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-01-18 09:49:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-16 13:59:52
 * @FilePath: \hy-vue3-ts-cms\src\views\main\system\user\config\content.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const contentTableConfig = {
	title: "用户列表",
	propList: [
		{ dataIndex: "name", key: "name", title: "用户名", minWidth: "100" },
		{ dataIndex: "realname", key: "realname", title: "真实名", minWidth: "120" },
		{ dataIndex: "cellphone", key: "cellphone", title: "手机号码", minWidth: "150" },
		{ dataIndex: "enable", key: "enable", title: "状态", minWidth: "100", slotName: "status" },
		{
			dataIndex: "createAt",
			key: "createAt",
			title: "创建时间",
			minWidth: "250",
			slotName: "create"
		},
		{
			dataIndex: "updateAt",
			key: "updateAt",
			title: "更新时间",
			minWidth: "250",
			slotName: "update"
		},
		{ key: "操作", title: "操作", minWidth: "120", slotName: "handler" }
	],
	showIndexColumn: true,
	showSelectColumn: true
};
