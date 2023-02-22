import React from "react";
import { FC, useRef, useState, useEffect } from "react";
import type Editor from "wangeditor";
import WangEditor from "wangeditor";
interface IProps {
	value?: string;
	zIndex?: number;
	height?: number;
	width?: number;
	focus?: boolean;
	updateValue: (html: string) => void;
}
export interface EditorInfo {
	html: string;
	text: string;
}
const Editor_: FC<IProps> = props => {
	const { value = "", zIndex = 500, height = 500, width = 0, focus = false, updateValue } = props;
	const editorRef = useRef(null);
	const instance = useRef<Editor | null>(null);
	const [isInitContent, setIsInitContent] = useState<boolean>(false);
	const [content, setContent] = useState<EditorInfo>({
		html: "",
		text: ""
	});
	useEffect(() => {
		createWangEditor();
		return () => {
			if (!instance.current) return;
			instance.current.destroy();
			instance.current = null;
		};
	});
	const createWangEditor = () => {
		instance.current = new WangEditor(editorRef.current);
		setEditorConfig();
		instance.current.create();
		initEditorContent(value);
	};
	const initEditorContent = (htmlStr: string, isFocus = false) => {
		if (!instance.current) return;
		const editor: Editor = instance.current as Editor;
		editor.config.focus = isFocus;
		if (!htmlStr) return;
		setIsInitContent(true);
		editor.txt.html(htmlStr);
	};
	const setEditorConfig = () => {
		if (!instance.current) return;
		const editor: Editor = instance.current as Editor;
		// 设置编辑区域高度为 500px
		editor.config.height = height!;
		// 设计z-index
		editor.config.zIndex = zIndex!;
		// 取消自动 focus
		editor.config.focus = focus!;
		// 配置 onchange 回调函数
		editor.config.onchange = function (newHtml: string) {
			setContent({
				html: newHtml,
				text: editor.txt.text()
			});
			if (!isInitContent) {
				updateValue(content.html);
				console.log("xx");
			}
			// 最后标记为 false
			setIsInitContent(false);
			// emit('onChange', content.html, content.text)
		};
		// 配置触发 onchange 的时间频率，默认为 200ms
		editor.config.onchangeTimeout = 500; // 修改为 500ms
		// 配置菜单栏，删减菜单，调整顺序
		editor.config.menus = [
			"head",
			"bold",
			"fontSize",
			"fontName",
			"italic",
			"underline",
			"strikeThrough",
			"indent",
			"lineHeight",
			"foreColor",
			"backColor",
			"link",
			"list",
			// 'todo',
			"justify",
			"quote",
			// 'emoticon',
			// 'image',
			// 'video',
			// 'table',
			"code",
			"splitLine",
			"undo",
			"redo"
		];
	};
	return <div className="editor" ref={editorRef} style={{ width: width ? `${width}px` : "100%" }}></div>;
};

export default Editor_;
