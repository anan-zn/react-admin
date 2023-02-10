/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-08 17:48:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-09 09:34:45
 * @FilePath: \react-admin\src\components\page-charts\src\PieChart.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import BaseChart from "@/components/echarts";
import { useMemo } from "react";
const LineChart = (props: any) => {
	const { labels, values } = props;
	const options = useMemo(
		() => ({
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "cross",
					label: {
						backgroundColor: "#6a7985"
					}
				}
			},
			legend: {},
			grid: {
				left: "3%",
				right: "4%",
				bottom: "3%",
				containLabel: true
			},
			xAxis: [
				{
					type: "category",
					boundaryGap: false,
					data: props.labels
				}
			],
			yAxis: [
				{
					type: "value"
				}
			],
			series: [
				{
					name: "分类销量统计",
					type: "line",
					stack: "总量",
					areaStyle: {},
					emphasis: {
						focus: "series"
					},
					data: props.values
				}
			]
		}),
		[labels, values]
	);
	return (
		<div className="line-chart">
			<BaseChart options={options}></BaseChart>
		</div>
	);
};

export default LineChart;
