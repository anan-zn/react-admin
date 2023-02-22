/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-13 17:02:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-20 10:47:42
 * @FilePath: \react-admin\src\routers\modules\main\analysis\dashboard.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Category from "@/views/main/product/category";
import { RouteObject } from "@/routers/interface";

const categoryRouter: RouteObject = {
	path: "/main/product/category",
	element: <Category />,
	meta: {
		requireAuth: true,
		title: "商品类别",
		key: "category"
	}
};

export default categoryRouter;
