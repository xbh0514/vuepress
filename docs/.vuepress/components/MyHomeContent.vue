<!-- @format -->

<script setup>
import { usePages } from "@temp/articles"
// import { sideBarTool } from "../utils/index.js"
const pages = usePages()
console.log(pages)
</script>

<template>
	<img class="bg-img" src="../public/img/bg.jpg" alt="" />
</template>

<style lang="css">
.bg-img {
	width: 100%;
	user-select: none !important;
}
.home-page > .page > .theme-default-content {
	max-width: 100%;
	padding: 0 0 2rem 0  !important;
}
</style>
