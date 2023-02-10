/*
 * @Description:
 * @Version: 2.0
 * @Autor: Zn
 * @Date: 2023-02-01 13:45:59
 * @LastEditors: Zn
 * @LastEditTime: 2023-02-01 13:48:33
 */
// * global
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
	}
	interface Navigator {
		msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
		browserLanguage: string;
	}
}

export {};
