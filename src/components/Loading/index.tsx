import { Spin } from "antd";
import { FC } from "react";
import "./index.less";

interface Loading {
	tip?: string;
}

const Loading: FC<Loading> = ({ tip = "Loading" }) => {
	return <Spin tip={tip} size="large" className="request-loading"></Spin>;
};

export default Loading;
