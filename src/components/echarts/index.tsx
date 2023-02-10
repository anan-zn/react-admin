import { useEffect, useRef } from "react";
import useEcharts from "@/hooks/useEcharts";
const BaseChart = (props: any) => {
	const { width, height, options } = props;
	const echartDivRef = useRef(null);
	useEffect(() => {
		const [setOptions] = useEcharts(echartDivRef.current!);
		setOptions(options);
	}, []);
	return (
		<div className="base-echart">
			<div className="echart" ref={echartDivRef} style={{ width, height }}></div>
		</div>
	);
};

export default BaseChart;
