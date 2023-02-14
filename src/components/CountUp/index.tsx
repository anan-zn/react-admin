/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-09 11:36:41
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 11:06:57
 * @FilePath: \react-admin\src\components\CountUp\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FC, useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import type { CountUpOptions } from "countup.js";
const defaultOptions: CountUpOptions = {
	decimalPlaces: 2, // 保留两位
	duration: 2, // 动画时长
	separator: ",", // 千位分割
	decimal: ".", // 小数分割
	prefix: "￥" // 单位
};

interface CuProps {
	number: number;
	option?: CountUpOptions;
}

const Cu: FC<CuProps> = ({ number, option }) => {
	const countRef = useRef(null);
	const instance = useRef<CountUp | null>(null);
	useEffect(() => {
		createCounter();
	}, []);
	useEffect(() => {
		update(number);
	}, [number]);
	const createCounter = () => {
		if (!countRef.current) return;
		const opts: CountUpOptions = Object.assign(defaultOptions, option);
		instance.current = new CountUp(countRef.current, number, opts);
		start();
	};

	const start = () => {
		if (!instance.current) return;
		instance.current.start();
	};

	const update = (number: number) => {
		if (!instance.current) return;
		instance.current.update(number);
	};
	return (
		<>
			<span ref={countRef}></span>
		</>
	);
};

export default Cu;
