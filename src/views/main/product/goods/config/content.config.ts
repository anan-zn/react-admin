/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-20 10:57:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-20 10:58:58
 * @FilePath: \react-admin\src\views\main\product\goods\config\content.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const contentTableConfig = {
	title: "用户列表",
	newBtnTitle: "新建商品",
	propList: [
		{ key: "name", dataIndex: "name", title: "商品名称", minWidth: "100" },
		{ key: "oldPrice", dataIndex: "oldPrice", title: "原价格", minWidth: "80" },
		{ key: "newPrice", dataIndex: "newPrice", title: "新价格", minWidth: "80" },
		{ key: "desc", dataIndex: "desc", title: "商品描述", minWidth: "100" },
		{ key: "status", dataIndex: "status", title: "状态", minWidth: "80" },
		{ key: "imgUrl", dataIndex: "imgUrl", title: "图片", minWidth: "100", slotName: "imageSlot" },
		{ key: "inventoryCount", dataIndex: "inventoryCount", title: "库存", minWidth: "80" },
		{ key: "saleCount", dataIndex: "saleCount", title: "销量", minWidth: "80" },
		{ key: "favorCount", dataIndex: "favorCount", title: "收藏", minWidth: "80" },
		{ key: "address", dataIndex: "address", title: "地址", minWidth: "80" },
		{ key: "createAt", dataIndex: "createAt", title: "创建时间", minWidth: "220", slotName: "create" },
		{ key: "updateAt", dataIndex: "updateAt", title: "更新时间", minWidth: "220", slotName: "update" },
		{ title: "操作", minWidth: "120", slotName: "handler" }
	],
	showIndexColumn: true,
	showSelectColumn: true
};
