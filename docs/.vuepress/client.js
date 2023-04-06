/** @format */

import { defineClientConfig } from "@vuepress/client"
import MyHomeContent from './components/MyHomeContent.vue'

export default defineClientConfig({
	enhance({ app, router, siteData }) {
		app.component('MyHomeContent', MyHomeContent)
	},
	setup() {},
	rootComponents: [],
})
