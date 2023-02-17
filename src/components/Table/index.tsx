import { Button, Table, Pagination, TableColumnProps } from "antd";
import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { Page } from "../Content";
import "./index.less";
type ColumnRender = (value: any, record: any, index: number) => ReactElement;

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
}

const ZnTable: FC<ZnTableProps> = ({
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
	setPage
}) => {
	const handleSizeChange = (current: number, size: number) => {
		setPage({ pageSize: size, currentPage: current });
	};
	const handleCurrentChange = (page: number, pageSize: number) => {
		setPage({ pageSize: pageSize, currentPage: page });
	};
	const setColumn = ({ operatorColumn }: { operatorColumn?: ColumnRender }) => {
		const column = propList?.find(item => item.title === "操作");
		if (column) column["render"] = operatorColumn;
		console.log("propList", propList, listData);
		return propList;
	};
	return (
		<div className="hy-table">
			<div className="header">
				{header}
				<div className="title">{title}</div>
				<div className="header-handler">{headerHandler}</div>
			</div>
			<Table dataSource={listData} columns={setColumn({ operatorColumn })}>
				{/* {columnRenders &&
					columnRenders.map((render: ColumnRender, index) => {
						return <Table.Column key={index} render={render}></Table.Column>;
					})} */}
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
