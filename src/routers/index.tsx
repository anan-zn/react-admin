import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Login from "@/views/login/index";
import { LayoutIndex } from "@/routers/constant";

// * 导入所有router
const metaRouters: any = import.meta.glob("./modules/*.tsx");

export const routerArray: RouteObject[] = [];

Object.keys(metaRouters).forEach((item: string) => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requireAuth: false,
			title: "登陆页",
			key: "login"
		}
	},
	{
		id: "main",
		path: "/main",
		element: <LayoutIndex />
	},
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

// 主路由组件

// const Router = () => {
// 	const routes = useRoutes(rootRouter as any);
// 	return routes;
// };

export default rootRouter;
