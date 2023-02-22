/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-21 17:26:52
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-22 09:09:05
 * @FilePath: \react-admin\src\views\main\story\list\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Editor from "@/components/Editor";
import React from "react";
import { useState } from "react";
const Chat = () => {
	const [htmlStr, setHtmlStr] = useState<string>("");

	return (
		<div className="chat">
			<Editor value={htmlStr} updateValue={setHtmlStr} />
		</div>
	);
};

export default Chat;
