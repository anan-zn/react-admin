import { Button, Table, Pagination, TableColumnProps } from "antd";
import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { Page } from "../Content";
import "./index.less";
type ColumnRender = (value: any, record: any, index: number) => ReactElement;

type SlotType = () => JSX.Element;

interface ZnTableProps {
	header?: JSX.Element;
	headerHandler?: JSX.Element;
	footer?: JSX.Element;
	title?: string;
	showIndexColumn?: boolean;
	showSelectColumn?: boolean;
	showFooter?: boolean;
	listData?: any[];
	propList?: any[];
	totalCount?: number;
	page?: { currentPage: number; pageSize: number };
	operatorColumn?: ColumnRender;
	setPage: Dispatch<SetStateAction<Page>>;
	Slots?: Record<string, SlotType>;
}

const ZnTable: FC<ZnTableProps> = props => {
	const {
		header,
		headerHandler,
		footer,
		title,
		showIndexColumn,
		showSelectColumn,
		showFooter,
		listData,
		propList,
		totalCount,
		operatorColumn,
		page,
		setPage,
		Slots
	} = props;
	const handleSizeChange = (current: number, size: number) => {
		setPage({ pageSize: size, currentPage: current });
	};
	const handleCurrentChange = (page: number, pageSize: number) => {
		setPage({ pageSize: pageSize, currentPage: page });
	};
	// const setColumn = ({ operatorColumn }: { operatorColumn?: ColumnRender }) => {
	// 	const column = propList?.find(item => item.title === "操作");
	// 	if (column) column["render"] = operatorColumn;
	// 	// console.log("propList", propList, listData);
	// 	// 根据配置里的slotname找到传入的slot-renderfuntion来渲染
	// 	propList?.forEach(item => {
	// 		if (item.slotName) {
	// 			const slot = Slots && Object.keys(Slots)?.find(slot => slot === item.slotName);
	// 			if (slot) {
	// 				item["render"] = Slots[slot] && Slots[slot]();
	// 			}
	// 		}
	// 	});
	// 	return propList;
	// };
	return (
		<div className="hy-table">
			<div className="header">
				{header}
				<div className="title">{title}</div>
				<div className="header-handler">{headerHandler}</div>
			</div>
			<Table dataSource={listData} columns={propList}>
				{/* {columnRenders &&
					columnRenders.map((render: ColumnRender, index) => {
						return <Table.Column key={index} render={render}></Table.Column>;
					})} */}
				{}
			</Table>
			{showFooter ? (
				<div className="footer">
					{footer ? (
						footer
					) : (
						<Pagination
							onShowSizeChange={handleSizeChange}
							onChange={handleCurrentChange}
							current={page?.currentPage}
							pageSize={page?.pageSize}
							pageSizeOptions={[10, 20, 30, 40]}
							showSizeChanger
							showQuickJumper
							total={totalCount}
							showTotal={total => `Total ${total} items`}
						></Pagination>
					)}
				</div>
			) : null}
		</div>
	);
};

export default ZnTable;
