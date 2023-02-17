/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-17 09:47:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-17 10:16:58
 * @FilePath: \react-admin\src\views\main\system\department\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Search from "@/components/Search";
import Content from "@/components/Content";
import Modal from "@/components/Model";
import { searchFormConfig } from "./config/search.config";
import { useMemo, useRef } from "react";
import { useGetPageData } from "@/hooks/useGetPageData";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";
import { usePageModal } from "@/hooks/usePageModal";
import { IFormItem } from "@/components/Form/interface";
import { store } from "@/redux";
const Department = () => {
	const modalConfigRef = useMemo(() => {
		const parentIdItem: IFormItem | undefined = modalConfig.formItems?.find(item => item.field === "parentId");
		parentIdItem!.options = store.getState().global.entireDepartments.map((item: any) => {
			return { label: item.name, value: item.id };
		});
		return modalConfig;
	}, []);
	// const newHandleCallback = () => {
	// 	const passwordItem = modalConfigRef.formItems?.find(item => item.field === "password");
	// 	passwordItem!.isHidden = false;
	// };
	// const editHandleCallback = () => {
	// 	const passwordItem = modalConfigRef.formItems?.find(item => item.field === "password");
	// 	passwordItem!.isHidden = true;
	// };

	// 处理的hook
	const [modalInfo, pageModalRef, handleNewData, handleEditData] = usePageModal();
	const [pageContentRef, handleQueryClick] = useGetPageData();
	return (
		<div className="department">
			<Search searchConfig={searchFormConfig} onQuery={handleQueryClick} />
			<Content
				ref={pageContentRef}
				pageName="department"
				contentConfig={contentTableConfig}
				editBtnClick={handleEditData}
				newBtnClick={handleNewData}
			/>
			<Modal
				ref={pageModalRef}
				modalConfig={modalConfigRef}
				pageName="department"
				defaultInfo={modalInfo}
				onConfirm={handleQueryClick}
			></Modal>
		</div>
	);
};

export default Department;
