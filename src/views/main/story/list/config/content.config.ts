export const contentTableConfig = {
	title: "故事列表",
	propList: [
		{ key: "title", dataIndex: "title", title: "故事标题", minWidth: "120" },
		{ key: "content", dataIndex: "content", title: "我的故事", minWidth: "500" },
		{ key: "createAt", dataIndex: "createAt", title: "创建时间", minWidth: "250", slotName: "create" }
	],
	showIndexColumn: true,
	showSelectColumn: false
};
