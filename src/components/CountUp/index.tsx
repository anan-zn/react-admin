import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import type { CountUpOptions } from "countup.js";
const defaultOptions: CountUpOptions = {
	decimalPlaces: 2, // 保留两位
	duration: 2, // 动画时长
	separator: ",", // 千位分割
	decimal: ".", // 小数分割
	prefix: "￥" // 单位
};
const Cu = (props: any) => {
	const { number, option } = props;
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
