import { defineConfig, loadEnv, ConfigEnv, UserConfig, resolveBaseUrl } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import viteEsLint from "vite-plugin-eslint";
import { wrapperEnv } from "./src/utils/getEnv";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
	// 根据当前工作目录中的 `mode` 加载 .env 文件
	// 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
	const env = loadEnv(mode.mode, process.cwd());
	const viteEnv = wrapperEnv(env);

	return {
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
		},
		// server config
		server: {
			host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// https: false,
			// 代理跨域（mock 不需要配置，这里只是个事列）
			proxy: {
				"/api": {
					target: "http://152.136.185.210:4000/", // easymock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		// plugins
		plugins: [
			react(),
			// createHtmlPlugin({
			// 	inject: {
			// 		data: {
			// 			title: viteEnv.VITE_GLOB_APP_TITLE
			// 		}
			// 	}
			// }),
			// // * 使用 svg 图标
			// createSvgIconsPlugin({
			// 	iconDirs: [resolve(process.cwd(), "src/assets/icons")],
			// 	symbolId: "icon-[dir]-[name]"
			// }),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin()
			// * 是否生成包预览
			// viteEnv.VITE_REPORT && visualizer(),
			// // * gzip compress
			// viteEnv.VITE_BUILD_GZIP &&
			// 	viteCompression({
			// 		verbose: true,
			// 		disable: false,
			// 		threshold: 10240,
			// 		algorithm: "gzip",
			// 		ext: ".gz"
			// 	})
		],
		// build configure
		build: {
			outDir: "dist",
			// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
			minify: "esbuild",
			// minify: "terser",
			// terserOptions: {
			// 	compress: {
			// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
			// 		drop_debugger: true
			// 	}
			// },
			rollupOptions: {
				output: {
					// Static resource classification and packaging
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
				}
			}
		}
	};
});
