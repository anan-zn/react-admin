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
const User = () => {
	const modalConfigRef = useMemo(() => {
		const roleOptions: IFormItem | undefined = modalConfig.formItems?.find(item => item.field === "roleId");
		roleOptions!.options = store.getState().global.entireRoles.map((item: any) => {
			return { label: item.name, value: item.id };
		});
		const departmentOption: IFormItem | undefined = modalConfig.formItems?.find(item => item.field === "departmentId");
		departmentOption!.options = store.getState().global.entireDepartments.map((item: any) => {
			return { label: item.name, value: item.id };
		});
		return modalConfig;
	}, []);
	const newHandleCallback = () => {
		const passwordItem = modalConfigRef.formItems?.find(item => item.field === "password");
		passwordItem!.isHidden = false;
	};
	const editHandleCallback = () => {
		const passwordItem = modalConfigRef.formItems?.find(item => item.field === "password");
		passwordItem!.isHidden = true;
	};

	// 处理的hook
	const [modalInfo, pageModalRef, handleNewData, handleEditData] = usePageModal(newHandleCallback, editHandleCallback);
	const [pageContentRef, handleQueryClick] = useGetPageData();
	return (
		<div className="user">
			<Search searchConfig={searchFormConfig} onQuery={handleQueryClick} />
			<Content
				ref={pageContentRef}
				pageName="users"
				contentConfig={contentTableConfig}
				editBtnClick={handleEditData}
				newBtnClick={handleNewData}
			/>
			<Modal
				ref={pageModalRef}
				modalConfig={modalConfigRef}
				pageName="users"
				defaultInfo={modalInfo}
				onConfirm={handleQueryClick}
			></Modal>
		</div>
	);
};

export default User;
