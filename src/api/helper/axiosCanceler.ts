import axios, { AxiosRequestConfig, Canceler } from "axios";
import { isFunction } from "@/utils/is";
import qs from "qs";

// * 声明一个 Map 用于存储每个请求的标识 和 取消函数
let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: AxiosRequestConfig) =>
	[config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");

export class AxiosCanceler {
	addPending(config: AxiosRequestConfig) {
		this.removePending(config);
		const url = getPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(canel => {
				if (!pendingMap.has(url)) {
					pendingMap.set(url, canel);
				}
			});
	}
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);

		if (pendingMap.has(url)) {
			const cancel = pendingMap.get(url);
			cancel && cancel();
			pendingMap.delete(url);
		}
	}
	removeAllPengding() {
		pendingMap.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});
		pendingMap.clear();
	}
	reset(): void {
		pendingMap = new Map<string, Canceler>();
	}
}
