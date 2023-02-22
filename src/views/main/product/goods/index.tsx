/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-17 09:47:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-20 14:35:03
 * @FilePath: \react-admin\src\views\main\system\department\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Content from "@/components/Content";
import Search from "@/components/Search";
import { Image } from "antd";
import { searchFormConfig } from "./config/search.config";
import { useGetPageData } from "@/hooks/useGetPageData";
import { contentTableConfig } from "./config/content.config";
const Category = () => {
	const [pageContentRef, handleQueryClick] = useGetPageData();
	const slotRenderMap = {
		imageSlot: (value: any, record: any, index: number) => {
			return <Image style={{ width: "50px", height: "50px" }} src={value} preview={value} />;
		}
	};
	return (
		<div className="goods">
			<Search searchConfig={searchFormConfig} onQuery={handleQueryClick} />
			<Content ref={pageContentRef} Slots={slotRenderMap} pageName="goods" contentConfig={contentTableConfig} />
		</div>
	);
};

export default Category;
