/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-21 17:29:36
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-21 17:30:27
 * @FilePath: \react-admin\src\routers\modules\main\story\list\list.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import StoryList from "@/views/main/story/list";
import { RouteObject } from "@/routers/interface";

const goodsRouter: RouteObject = {
	path: "/main/story/list",
	element: <StoryList />,
	meta: {
		requireAuth: true,
		title: "故事列表",
		key: "list"
	}
};

export default goodsRouter;
