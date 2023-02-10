import { useLocation, Navigate } from "react-router-dom";
import { AxiosCanceler } from "@/api/helper/axiosCanceler";
import rootRouter from "..";
import { store } from "@/redux";
import { handleRouter, searchRoute } from "@/utils/utils";
import { HOME_URL } from "@/config/config";

const axiosCanceler = new AxiosCanceler();

const AuthRouter = (props: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, rootRouter);
	// 跳转前清除所有请求

	axiosCanceler.removeAllPengding();

	if (!route.meta?.requireAuth) return props.children;

	const token = store.getState().global.token;
	if (!token) return <Navigate to="/login" replace></Navigate>;

	const dynamicRouter = handleRouter(store.getState().menu.userMenuList);
	const staticRouter = [HOME_URL, "/403"];
	const pathList = dynamicRouter.concat(staticRouter);
	if (pathList.indexOf(pathname) == -1) return <Navigate to="/403" />;

	// * 当前账号有权限返回 Router，正常访问页面
	return props.children;
};

export default AuthRouter;
