/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-08 14:02:16
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 11:00:55
 * @FilePath: \react-admin\src\components\Code\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import "./index.less";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

interface CodeProps {
	code: string;
	language: string;
}

const Code: React.FC<CodeProps> = ({ code, language }) => {
	const [highlightedCode, setHighlightedCode] = useState("");
	useEffect(() => {
		setHighlightedCode(hljs.highlight(code, { language }).value);
	}, []);
	return (
		<div className="code">
			<pre className="bg">
				<code className={"language" + language ? language : "html"}>{highlightedCode}</code>
			</pre>
		</div>
	);
};

export default Code;
