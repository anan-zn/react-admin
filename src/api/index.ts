/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-03 15:26:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-06 13:14:05
 * @FilePath: \react-admin\src\api\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import NProgress from "@/config/nprogress";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { showFullScreenLoading, tryHideFullScreenLoading } from "@/config/serviceLoading";
import { AxiosCanceler } from "./helper/axiosCanceler";
import { checkStatus } from "./helper/checkStatus";
import { ResultEnum } from "@/enums/httpEnum";
import { ResultData } from "./interface";
import { store } from "@/redux";
import { setToken } from "@/redux/modules/global/action";
import { message } from "antd";

const axiosCanceler = new AxiosCanceler();

const config = {
	baseURL: import.meta.env.VITE_API_URL as string,
	timeout: 10000,
	withCredentials: true
};

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config);
		this.service.interceptors.request.use(
			(config: AxiosRequestConfig): any => {
				NProgress.start();
				axiosCanceler.addPending(config);
				!config.headers!.noLoading || showFullScreenLoading();
				if (config.url?.indexOf("login") != -1) return config;
				const token: string = store.getState().global.token;
				return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
			},
			(err: AxiosError) => {
				return Promise.reject(err);
			}
		);
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;
				NProgress.done();
				// 移除本次请求
				axiosCanceler.removePending(config);
				tryHideFullScreenLoading();
				if (data.code == ResultEnum.OVERDUE) {
					store.dispatch(setToken(""));
					message.error(data.msg);
					window.location.hash = "/login";
					return Promise.reject(data);
				}
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					message.error(data.msg);
					return Promise.reject(data);
				}
				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				NProgress.done();
				tryHideFullScreenLoading();
				// 请求超时单独判断，请求超时没有 response
				if (error.message.indexOf("timeout") !== -1) message.error("请求超时，请稍后再试");
				// 根据响应的错误状态码，做不同的处理
				if (response) checkStatus(response.status);
				// 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
				if (!window.navigator.onLine) window.location.hash = "/500";
				return Promise.reject(error);
			}
		);
	}
	// * 常用请求方法封装
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new RequestHttp(config);
