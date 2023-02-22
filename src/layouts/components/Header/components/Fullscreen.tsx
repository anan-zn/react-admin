import { message } from "antd";
import { useEffect, useState } from "react";
import screenFull from "screenfull";
const Fullscreen = () => {
	const [fullScreen, setFullScreen] = useState<boolean>(true);
	useEffect(() => {
		screenFull.on("change", () => {
			if (screenFull.isFullscreen) setFullScreen(true);
			else setFullScreen(false);
			return () => screenFull.off("change", () => {});
		});
	}, []);
	const handleFullScreen = () => {
		if (!screenFull.isEnabled) message.warning("当前您的浏览器不支持全屏 ❌");
		screenFull.toggle();
	};
	return (
		<i className={["icon-style iconfont", fullScreen ? "icon-suoxiao" : "icon-fangda"].join(" ")} onClick={handleFullScreen}></i>
	);
};
export default Fullscreen;
