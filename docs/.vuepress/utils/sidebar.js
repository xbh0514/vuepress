/** @format */

import { fs, path } from "@vuepress/utils"

let sideBarTool = {
	// 获取首级
	genSideBarGroup: (RootPath, unDirIncludes, SuffixIncludes) => {
		let sidebars = []
		fs.readdirSync(RootPath).forEach(file => {
			// 排除文件夹
			if (unDirIncludes.includes(file)) {
				return
			}
			// 排除README.md和index.md
			if (file == "README.md" || file == "readme.md" || file == "index.md") {
				return
			}
			let filename = `/${file}/`
			let filePath = `${RootPath}/${file}`
			sidebars.push({
				text: file,
                link: `/${file}/`,
				children: sideBarTool.GetSideChildren(filePath, filename),
			})
		})
		return sidebars
	},
	// 获取子集
	GetSideChildren: (RootPath, filename) => {
        let fileList = []
		fs.readdirSync(RootPath).forEach(file => {
			// 排除README.md和index.md
			if (file == "README.md" || file == "readme.md" || file == "index.md") {
				return
			}
            if (path.extname(file) == ".md") {
                let item = {
                    text: file,
                    link: `${filename}${file}`
                  }
                  fileList.push(item)
            }else {
                let childfilePath = `${RootPath}/${file}`
                let childfilename = `${filename}${file}/`
                let item = {
                    text: file,
                    link: `${filename}${file}`,
                    children: sideBarTool.GetSideChildren(childfilePath, childfilename),
                }
                fileList.push(item)
            }
			
		})
        return fileList
	},
}

export default sideBarTool
