/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-13 17:02:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-17 11:26:31
 * @FilePath: \react-admin\src\routers\modules\main\analysis\dashboard.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Department from "@/views/main/system/department";
import { RouteObject } from "@/routers/interface";

const departmentRouter: RouteObject = {
	path: "/main/system/department",
	element: <Department />,
	meta: {
		requireAuth: true,
		title: "部门管理",
		key: "department"
	}
};

export default departmentRouter;
