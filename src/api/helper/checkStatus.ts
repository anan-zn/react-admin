/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-03 16:39:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-03 16:51:30
 * @FilePath: \react-admin\src\api\helper\checkStatus.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { message } from "antd";

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number): void => {
	switch (status) {
		case 400:
			message.error("请求失败！请您稍后重试");
			break;
		case 401:
			message.error("登录失效！请您重新登录");
			break;
		case 403:
			message.error("当前账号无权限访问！");
			break;
		case 404:
			message.error("你所访问的资源不存在！");
			break;
		case 405:
			message.error("请求方式错误！请您稍后重试");
			break;
		case 408:
			message.error("请求超时！请您稍后重试");
			break;
		case 500:
			message.error("服务异常！");
			break;
		case 502:
			message.error("网关错误！");
			break;
		case 503:
			message.error("服务不可用！");
			break;
		case 504:
			message.error("网关超时！");
			break;
		default:
			message.error("请求失败！");
	}
};
