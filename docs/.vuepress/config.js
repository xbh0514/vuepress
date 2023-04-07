/** @format */

import { viteBundler } from "vuepress"

import { defineUserConfig } from "vuepress"
// 返回顶部插件
import { backToTopPlugin } from "@vuepress/plugin-back-to-top"
// 搜索插件
import { searchPlugin } from "@vuepress/plugin-search"
// icon
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon"
// 图片缩放功能
// import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom"
// 切换页面进入条
import { nprogressPlugin } from "@vuepress/plugin-nprogress"
// 根据组件文件或目录自动注册 Vue 组件
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"

import { getDirname, path } from "@vuepress/utils"

const __dirname = getDirname(import.meta.url)

import { defaultTheme } from "@vuepress/theme-default"

// git
import { gitPlugin } from "@vuepress/plugin-git"
// 调色板
import { palettePlugin } from "@vuepress/plugin-palette"
// git pages
import { usePagesPlugin } from "vuepress-plugin-use-pages"
//导入生成侧边栏的工具类
import sideBarTool from "./utils/sidebar"

// 需要排除的一些目录
let unDirIncludes = ["node_modules", "assets", "public", "dist", "components",".vuepress"]
// 只需要处理后缀的文件类型
let SuffixIncludes = ["md", "html"]
//使用方法生生成侧边栏
// let rootPath = path.dirname()
// let rootPath = getDirname(import.meta.url)
let rootPath = path.dirname(__dirname)
// 侧边栏
let sidebar = sideBarTool.genSideBarGroup(rootPath, unDirIncludes, SuffixIncludes, {})
console.log("sidebar----------------",sidebar);

export default defineUserConfig({
	alias: {
		// '@theme/HomeFooter.vue': path.resolve(__dirname, './components/MyHomeFooter.vue'),
		// "@theme/HomeHero.vue": path.resolve(__dirname, "./components/MyHomeContent.vue"),
	},
	bundler: viteBundler(),
	theme: defaultTheme({
		// 在这里进行配置
		lastUpdatedText: "更新时间：",
		contributorsText: "更新人：",
		navbar: [
			// NavbarItem
			{
				text: "articles",
				link: "/articles/",
			},
			// NavbarGroup
			{
				text: "Group",
				children: ["/group/foo.md", "/group/bar.md"],
			},
		],
		sidebar: sidebar
	}),

	debug: true,
	open: false,
	base: "/vuepress/",
	lang: "zh-CN",
	title: "XPlugin",
	description: "XPlugin",

	plugins: [
		// 返回顶部
		backToTopPlugin(),
		// 搜索功能
		searchPlugin({
			// 排除首页
			isSearchable: page => page.path !== "/",
			// 配置项
			locales: {
				"/": {
					placeholder: "搜索",
				},
				"/zh/": {
					placeholder: "搜索",
				},
			},
		}),
		// icon
		externalLinkIconPlugin({
			// 配置项
			"/": {
				openInNewWindow: "在新窗口打开",
			},
			"/zh/": {
				openInNewWindow: "在新窗口打开",
			},
		}),
		// 图片缩放
		// mediumZoomPlugin({
		// 	// 配置项
		// }),
		// 页面切换进度条
		nprogressPlugin(),
		// 根据组件文件或目录自动注册 Vue 组件
		registerComponentsPlugin({
			// 配置项
			componentsDir: path.resolve(__dirname, "./components"),
		}),
		gitPlugin({
			// 配置项
		}),
		palettePlugin({
			// 配置项
		}),
		usePagesPlugin({
			// 配置项
			startsWith: "/articles/", // fetch only matched paths
			filter: page => page.data.lang === "zh-CN", // fetch only filtered pages
			sort: (a, b) => b.data.git.updatedTime - a.data.git.updatedTime,
			limit: 20, // maximum cached size
			file: "articles.js",
		}),
	],
})
