import { Modal } from "antd";
import React, { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState } from "react";
import ZnForm from "../Form";
import { IForm } from "../Form/interface";
import { editPageDataAction, newPageDataAction } from "./utils";

interface ModalProps {
	modalConfig: IForm;
	/** 传入表单的默认数据 */
	defaultInfo?: any;
	pageName: string;
	otherInfo?: any;
	children?: JSX.Element;
	onConfirm: (otherInfo?: any) => void;
}

const App: ForwardRefRenderFunction<
	{
		setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	},
	ModalProps
> = ({ modalConfig, defaultInfo, pageName, otherInfo, children, onConfirm }, ref) => {
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState("Content of the modal");
	const [formData, setFormData] = useState({});
	useEffect(() => {
		const _formData: Record<string, any> = {};

		for (const item of modalConfig.formItems) {
			_formData[`${item.field}`] = defaultInfo[`${item.field}`];
		}
		console.log("_formData", _formData);
		setFormData({ ..._formData });
	}, [defaultInfo]);
	const handleOk = async () => {
		try {
			setConfirmLoading(true);
			if (Object.keys(defaultInfo).length) {
				// 编辑
				await editPageDataAction({
					pageName: pageName,
					queryInfo: { ...formData, ...otherInfo },
					id: defaultInfo.id
				});
			} else {
				// 新建
				await newPageDataAction({
					pageName: pageName,
					queryInfo: { ...formData, ...otherInfo }
				});
			}
		} finally {
			onConfirm();
			setOpen(false);
			setConfirmLoading(false);
		}
	};

	const handleCancel = () => {
		console.log("Clicked cancel button");
		setOpen(false);
	};
	useImperativeHandle(ref, () => ({
		setOpen
	}));
	return (
		<>
			<Modal title="Title" visible={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
				<ZnForm {...modalConfig} formData={formData} setFormData={setFormData}></ZnForm>
				{children}
			</Modal>
		</>
	);
};

export default forwardRef(App);
