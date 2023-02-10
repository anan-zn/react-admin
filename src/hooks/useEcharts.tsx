import * as echarts from "echarts";
import type { EChartsOption } from "echarts";

import chinaJson from "@/components/echarts/data/china.json";
import { useEffect } from "react";
echarts.registerMap("china", chinaJson as any);

function useEcharts(domEl: HTMLElement, theme = "light") {
	// 初始化
	const echartsInstance = echarts.init(domEl, theme, { renderer: "svg" });

	const setOptions = (options: EChartsOption) => {
		echartsInstance.setOption(options);
	};
	const resizeFn = () => {
		echartsInstance.resize();
	};
	useEffect(() => {
		window.addEventListener("resize", resizeFn);
		return () => {
			window.removeEventListener("resize", resizeFn);
		};
	}, []);
	return [setOptions];
}

export default useEcharts;
