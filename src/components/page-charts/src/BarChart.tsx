import BaseChart from "@/components/echarts";
import * as echarts from "echarts";
import { useMemo } from "react";
const BarChart = (props: any) => {
	const { labels, values } = props;
	const options = useMemo(
		() => ({
			title: {
				text: "支持鼠标滚动缩放"
			},
			grid: {
				bottom: "5%"
			},
			xAxis: {
				data: labels,
				axisLabel: {
					inside: true,
					color: "#fff"
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				z: 10
			},
			yAxis: {
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#999"
				}
			},
			dataZoom: [
				{
					type: "inside"
				}
			],
			series: [
				{
					type: "bar",
					showBackground: true,
					itemStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{ offset: 0, color: "#83bff6" },
							{ offset: 0.5, color: "#188df0" },
							{ offset: 1, color: "#188df0" }
						])
					},
					emphasis: {
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{ offset: 0, color: "#2378f7" },
								{ offset: 0.7, color: "#2378f7" },
								{ offset: 1, color: "#83bff6" }
							])
						}
					},
					data: values
				}
			]
		}),
		[labels, values]
	);
	return (
		<div className="bar-chart">
			<BaseChart options={options}></BaseChart>
		</div>
	);
};

export default BarChart;
