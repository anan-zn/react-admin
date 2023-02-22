import Chat from "@/views/main/story/chat";
import { RouteObject } from "@/routers/interface";

const chatRouter: RouteObject = {
	path: "/main/story/chat",
	element: <Chat />,
	meta: {
		requireAuth: true,
		title: "故事编辑",
		key: "chat"
	}
};

export default chatRouter;
