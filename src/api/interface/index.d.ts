/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-03 14:52:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-14 10:36:47
 * @FilePath: \react-admin\src\api\interface\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// * 请求响应参数(不包含data)
export interface Result {
	code: string;
	msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
	data?: T;
}

// * 登录
declare namespace Login {
	interface ReqLoginForm {
		username: string;
		password: string;
	}
	interface ResLogin {
		id: number;
		name: string;
		token: string;
	}
	type UserInfo = any;
	interface ResAuthButtons {
		[propName: string]: any;
	}
	interface LoginInfo {
		id: number;
		token: string;
		name: string;
	}
}
