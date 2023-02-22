import { usePermission } from "@/hooks/usePermission";
import { store } from "@/redux";
import { Button } from "antd";
import {
	useEffect,
	useImperativeHandle,
	useMemo,
	useState,
	forwardRef,
	ForwardRefRenderFunction,
	Dispatch,
	SetStateAction
} from "react";
import ZnTable from "../Table";
import { getPageData, deletePageDataAction } from "./utils";

export interface Page {
	currentPage: number;
	pageSize: number;
}

type SlotType = (value: any, record: any, index: number) => JSX.Element;

interface IProps {
	contentConfig: Record<string, unknown>;
	pageName: string;
	Slots?: Record<string, SlotType>;
	editBtnClick?: (item?: any) => void;
	newBtnClick?: () => void;
}

const Content: ForwardRefRenderFunction<
	{
		getData: (otherInfo: any) => void;
	},
	IProps
> = ({ contentConfig, pageName, editBtnClick, newBtnClick, Slots }, ref) => {
	const isCreate = usePermission(pageName, "create");
	const isDelete = usePermission(pageName, "delete");
	const isUpdate = usePermission(pageName, "update");
	const isQuery = usePermission(pageName, "query");
	const [page, setPage] = useState<Page>({
		currentPage: 1,
		pageSize: 10
	});

	// const totalCount = useMemo(() => store.getState().system[`${pageName}TotalCount`], []);
	// const listData = useMemo(() => store.getState().system[`${pageName}List`], []);
	const [totalCount, setTotalCount] = useState<number>(store.getState().system[`${pageName}TotalCount`]);
	const [listData, setListData] = useState<any[]>(store.getState().system[`${pageName}List`]);
	const handleEditClick = (value: any, record: any) => {
		editBtnClick && editBtnClick(value);
	};
	const handleDeleteClick = async (value: any, record: any) => {
		await deletePageDataAction({ pageName: pageName, id: value.id });
		setListData(store.getState().system[`${pageName}List`]);
	};
	const handleNewData = async () => {
		newBtnClick && newBtnClick();
	};
	// const setPropList = () => {};
	const headerHandler = () => {
		return (
			<Button hidden={!isCreate} type="primary" size="middle" onClick={handleNewData}>
				{(contentConfig.newBtnTitle as string) ?? "新建数据"}
			</Button>
		);
	};
	const tableRowBtns = (value: any, record: any, index: number) => {
		return (
			<div className="handler">
				<Button disabled={!isUpdate} type="text" size="small" onClick={e => handleEditClick(value, record)}>
					编辑
				</Button>
				<Button disabled={!isDelete} type="text" size="small" onClick={e => handleDeleteClick(value, record)}>
					删除
				</Button>
			</div>
		);
	};
	// 取出剩余插槽名
	const propList = useMemo(() => {
		const propList = contentConfig.propList as any[];
		const column = propList?.find(item => item.title === "操作");
		if (column) column["render"] = tableRowBtns;
		// console.log("propList", propList, listData);
		// 根据配置里的slotname找到传入的slot-renderfuntion来渲染
		propList?.forEach(item => {
			if (item.slotName) {
				const slot = Slots && Object.keys(Slots)?.find(slot => slot === item.slotName);
				if (slot) {
					item["render"] = Slots[slot] && Slots[slot];
				}
			}
		});
		return propList;
	}, [contentConfig]);
	let otherQueryInfo = {};
	const getData = async (otherInfo: any = {}) => {
		if (!isQuery) return;
		otherQueryInfo = otherInfo;
		await getPageData({
			pageName,
			queryInfo: {
				offset: (page.currentPage - 1) * page.pageSize,
				size: page.pageSize,
				...otherInfo
			}
		});
		setTotalCount(store.getState().system[`${pageName}TotalCount`]);

		setListData([...store.getState().system[`${pageName}List`]]);
	};
	useImperativeHandle(ref, () => ({
		getData
	}));
	useEffect(() => {
		getData();
	}, [page]);
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="page-content">
			<ZnTable
				listData={listData}
				totalCount={totalCount}
				// operatorColumn={tableRowBtns}
				setPage={setPage}
				{...contentConfig}
				propList={propList}
				headerHandler={headerHandler()}
			></ZnTable>
		</div>
	);
};

export default forwardRef(Content);
