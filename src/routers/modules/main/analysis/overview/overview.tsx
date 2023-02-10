/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-07 17:47:24
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-07 17:50:02
 * @FilePath: \react-admin\src\routers\modules\main\analysis\overview\overview.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { LayoutIndex } from "@/routers/constant";
import OverView from "@/views/main/analysis/overview";
import { RouteObject } from "@/routers/interface";

const OverViewRouter: RouteObject = {
	path: "/main/analysis/overview",
	element: <OverView />,
	meta: {
		requireAuth: true,
		title: "核心技术",
		key: "overview"
	}
};

export default OverViewRouter;
