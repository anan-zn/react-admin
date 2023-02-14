/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-08 17:49:18
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 16:56:02
 * @FilePath: \react-admin\src\components\page-charts\src\BarChart.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import BaseChart from "@/components/echarts";
import * as echarts from "echarts";
import { FC, useMemo } from "react";

interface BarChartProps {
	data: { labels: string[]; values: string[] };
}

const BarChart: FC<BarChartProps> = props => {
	const { labels, values } = props.data;
	const options = useMemo<echarts.EChartsOption>(
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
