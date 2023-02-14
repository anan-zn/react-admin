/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-01 15:47:33
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 15:36:36
 * @FilePath: \react-admin\src\layouts\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Layout } from "antd";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { updateCollapse } from "@/redux/modules/menu/action";
import LayoutMenu from "./components/Menu";
import LayoutFooter from "./components/Footer";
import "./index.less";

interface IProps {
	isCollapse: boolean;
	updateCollapse: typeof updateCollapse;
}

const LayoutIndex: FC<IProps> = props => {
	const { Sider, Content } = Layout;
	const { isCollapse, updateCollapse } = props;

	// 监听窗口大小变化
	const listeningWindow = () => {
		window.onresize = () => {
			return () => {
				const screenWidth = document.body.clientWidth;
				if (!isCollapse && screenWidth < 1200) updateCollapse(true);
				if (!isCollapse && screenWidth > 1200) updateCollapse(false);
			};
		};
	};

	useEffect(() => {
		listeningWindow();
	});

	return (
		<section className="container">
			<Sider trigger={null} collapsed={props.isCollapse} width={220} theme="dark">
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				{/* <LayoutHeader></LayoutHeader>
				<LayoutTabs></LayoutTabs> */}
				<Content>
					<Outlet></Outlet>
				</Content>
				<LayoutFooter></LayoutFooter>
			</Layout>
		</section>
	);
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { updateCollapse };

export default LayoutIndex;
