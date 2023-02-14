import { FC, useEffect, useRef } from "react";
import useEcharts from "@/hooks/useEcharts";
import { EChartsOption } from "echarts";

interface BaseChartProps {
	width?: number;
	height?: number;
	options: EChartsOption;
}

const BaseChart: FC<BaseChartProps> = ({ width = 500, height = 350, options }) => {
	// console.log("options", options);
	const [echartsRef] = useEcharts(options);
	return (
		<div className="base-echart">
			<div className="echart" ref={echartsRef} style={{ width, height }}></div>
		</div>
	);
};

export default BaseChart;
