import * as echarts from "echarts";
import type { EChartsOption } from "echarts";

import chinaJson from "@/components/echarts/data/china.json";
import { useEffect, useRef } from "react";
echarts.registerMap("china", chinaJson as any);

function useEcharts(options: EChartsOption, theme = "light") {
	// 初始化
	const myChart = useRef<echarts.EChartsType>();
	const echartsRef = useRef<HTMLDivElement>(null);
	const resizeFn = () => {
		echartsRef && myChart?.current?.resize();
	};

	useEffect(() => {
		if (echartsRef.current) {
			myChart.current = echarts.init(echartsRef.current, theme, { renderer: "svg" });
		}
		console.log("options", options);
		myChart?.current?.setOption(options);
		window.addEventListener("resize", resizeFn);
		return () => {
			window.removeEventListener("resize", resizeFn);
			myChart?.current?.dispose();
		};
	}, []);
	return [echartsRef];
}

export default useEcharts;
