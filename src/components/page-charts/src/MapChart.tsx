/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-08 17:48:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 15:33:54
 * @FilePath: \react-admin\src\components\page-charts\src\PieChart.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import BaseChart from "@/components/echarts";
import { convertData } from "../utils/convert-data";
import { FC, useMemo } from "react";
import { EChartsOption } from "echarts";

interface MapChartProps {
	data: number[];
}

const MapChart: FC<MapChartProps> = props => {
	const { data } = props;
	const options = useMemo<EChartsOption>(
		() => ({
			backgroundColor: "#fff",
			title: {
				text: "全国销量统计",
				left: "center",
				textStyle: {
					color: "#fff"
				}
			},
			tooltip: {
				trigger: "item",
				formatter: function (params: any) {
					return params.name + " : " + params.value[2];
				}
			},
			visualMap: {
				min: 0,
				max: 60000,
				left: 20,
				bottom: 20,
				calculable: true,
				text: ["高", "低"],
				inRange: {
					color: ["rgb(70, 240, 252)", "rgb(250, 220, 46)", "rgb(245, 38, 186)"]
				},
				textStyle: {
					color: "#fff"
				}
			},
			geo: {
				map: "china",
				roam: "scale",
				emphasis: {
					areaColor: "#f4cccc",
					borderColor: "rgb(9, 54, 95)",
					itemStyle: {
						areaColor: "#f4cccc"
					}
				}
			},
			series: [
				{
					name: "销量",
					type: "scatter",
					coordinateSystem: "geo",
					data: convertData(props.data),
					symbolSize: 12,
					emphasis: {
						itemStyle: {
							borderColor: "#fff",
							borderWidth: 1
						}
					}
				},
				{
					type: "map",
					map: "china",
					geoIndex: 0,
					aspectScale: 0.75,
					tooltip: {
						show: false
					}
				}
			]
		}),
		[data]
	);
	return (
		<div className="map-chart">
			<BaseChart options={options}></BaseChart>
		</div>
	);
};

export default MapChart;
