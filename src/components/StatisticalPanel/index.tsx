import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
const Sp = (props: any) => {
	const { panelData } = props;
	return (
		<div className="statistical">
			<div className="header">
				<span>{panelData.title}</span>
				<Tooltip title={panelData.tips} placement="rightTop">
					<InfoCircleOutlined />
				</Tooltip>
			</div>
			<div className="content"></div>
			<div className="footer"></div>
		</div>
	);
};

export default Sp;
