/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-17 10:29:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-17 11:53:50
 * @FilePath: \react-admin\src\views\main\system\role\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Search from "@/components/Search";
import Content from "@/components/Content";
import Modal from "@/components/Model";
import { searchFormConfig } from "./config/search.config";
import { useMemo, useRef, useState } from "react";
import { useGetPageData } from "@/hooks/useGetPageData";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";
import { usePageModal } from "@/hooks/usePageModal";
import { IFormItem } from "@/components/Form/interface";
import { store } from "@/redux";
import { Tree } from "antd";
const Role = () => {
	const [otherInfo, setOtherInfo] = useState({});
	const roleMenus = useMemo(() => store.getState().global.entireMenus, []);
	const treeRef = useRef(null);

	const handleMenuCheckChange = () => {
		console.log("handleMenuCheckChange");
		// const passwordItem = modalConfigRef.formItems?.find(item => item.field === "password");
		// passwordItem!.isHidden = false;
	};
	const editHandleCallback = () => {
		console.log("editHandleCallback");
	};

	// 处理的hook
	const [modalInfo, pageModalRef, handleNewData, handleEditData] = usePageModal(undefined, editHandleCallback);
	const [pageContentRef, handleQueryClick] = useGetPageData();
	return (
		<div className="role">
			<Search searchConfig={searchFormConfig} onQuery={handleQueryClick} />
			<Content
				ref={pageContentRef}
				pageName="role"
				contentConfig={contentTableConfig}
				editBtnClick={handleEditData}
				newBtnClick={handleNewData}
			/>
			<Modal
				ref={pageModalRef}
				modalConfig={modalConfig}
				pageName="role"
				defaultInfo={modalInfo}
				otherInfo={otherInfo}
				onConfirm={handleQueryClick}
			>
				<Tree ref={treeRef} treeData={roleMenus} className="menu-tree" onCheck={handleMenuCheckChange}></Tree>
			</Modal>
		</div>
	);
};

export default Role;
