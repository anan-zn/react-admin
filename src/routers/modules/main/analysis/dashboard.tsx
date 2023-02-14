import { LayoutIndex } from "@/routers/constant";
import DashBoard from "@/views/main/analysis/dashboard";
import { RouteObject } from "@/routers/interface";

const DashBoardRouter: RouteObject = {
	path: "/main/analysis/dashboard",
	element: <DashBoard />,
	meta: {
		requireAuth: true,
		title: "数据总览",
		key: "dashboard"
	}
};

export default DashBoardRouter;
