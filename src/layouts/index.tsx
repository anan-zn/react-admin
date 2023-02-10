import { Layout } from "antd";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { updateCollapse } from "@/redux/modules/menu/action";
import LayoutMenu from "./components/Menu";
import LayoutFooter from "./components/Footer";
import "./index.less";
const LayoutIndex = (props: any) => {
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
