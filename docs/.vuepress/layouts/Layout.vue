<!-- @format -->

<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue"
import { usePageData } from "@vuepress/client"
import { usePages } from "@temp/pages"
const page = usePageData()
console.log(page.value.git)
const pages = usePages()
console.log(pages)
</script>

<template>
	<ParentLayout>
		<template #page-top>
			<img class="bg-img" src="img/bg.jpg" alt="" />
		</template>
	</ParentLayout>
</template>

<style lang="css">
.bg-img {
	width: 100%;
	user-select: none !important;
}
</style>
