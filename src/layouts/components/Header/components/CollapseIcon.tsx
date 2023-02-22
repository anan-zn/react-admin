import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { updateCollapse } from "@/redux/modules/menu/action";
import { FC } from "react";

interface IProps {
	isCollapse: boolean;
	updateCollapse: typeof updateCollapse;
}

const CollapseIcon: FC<IProps> = ({ isCollapse, updateCollapse }) => {
	return (
		<div
			className="collapsed"
			onClick={() => {
				updateCollapse(!isCollapse);
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { updateCollapse };

export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon);
