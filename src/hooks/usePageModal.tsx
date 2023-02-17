import { RefObject, useRef, useState } from "react";

export interface IModalHandler {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type CallbackFn = (item?: any) => void;

export const usePageModal = (
	newHandleCallback?: CallbackFn,
	editHandleCallback?: CallbackFn
): [Record<string, any>, RefObject<IModalHandler>, CallbackFn, CallbackFn] => {
	const [modalInfo, setModalInfo] = useState({});
	const pageModalRef = useRef<IModalHandler>(null);
	const handleNewData = () => {
		setModalInfo({});
		if (pageModalRef.current) {
			pageModalRef.current.setOpen(true);
		}
		newHandleCallback && newHandleCallback();
	};

	const handleEditData = (item: any) => {
		setModalInfo({ ...item });
		if (pageModalRef.current) {
			pageModalRef.current.setOpen(true);
		}
		editHandleCallback && editHandleCallback(item);
	};

	return [modalInfo, pageModalRef, handleNewData, handleEditData];
};
