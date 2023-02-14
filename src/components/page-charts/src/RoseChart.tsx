/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-08 17:48:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 15:33:45
 * @FilePath: \react-admin\src\components\page-charts\src\PieChart.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import BaseChart from "@/components/echarts";
import { EChartsOption } from "echarts";
import { FC, useMemo } from "react";

interface RoseChartProps {
	data: number[];
}

const RoseChart: FC<RoseChartProps> = props => {
	const { data } = props;
	const options = useMemo<EChartsOption>(
		() => ({
			toolbox: {
				show: true,
				feature: {
					mark: { show: true },
					dataView: { show: true, readOnly: false },
					restore: { show: true },
					saveAsImage: { show: true }
				}
			},
			tooltip: {
				trigger: "item"
			},
			series: [
				{
					name: "访问来源",
					type: "pie",
					radius: [10, 160],
					center: ["50%", "50%"],
					roseType: "area",
					itemStyle: {
						borderRadius: 8
					},
					data: props.data,
					label: {
						show: false
					}
				}
			]
		}),
		[data]
	);
	return (
		<div className="rose-chart">
			<BaseChart options={options}></BaseChart>
		</div>
	);
};

export default RoseChart;
