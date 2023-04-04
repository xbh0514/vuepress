module.exports = {
	base:'/vuepress/',
	title: "小豪云上解忧铺",
	description: "解决前端疑难杂症",
	themeConfig: {
		
		// 假定 GitHub。也可以是一个完整的 GitLab 网址
		// repo: 'https://github.com/xiebeihao/VuePress',
		// 如果你的文档不在仓库的根部
		// docsDir: 'docs',
		// 可选，默认为 master
		docsBranch: 'gh-pages',
		// 默认为 true，设置为 false 来禁用
		lastUpdated: '更新时间',
		editLinks: true,
		nav: [
			{ text: "首页", link: "/" },
			{ text: "目录", link: "/container/" },
		],
		sidebar: [
			{
				title: "JavaScript",
				collapsable: false,
				children: [
					{
						title: "变量",
					},
					{
						title: "数组",
					},
				],
			},
			{
				title: "Vue2",
				children: [
					/* ... */
				],
			},
			{
				title: "PHP",
				children: [
					/* ... */
				],
			},
		],
	},
};
