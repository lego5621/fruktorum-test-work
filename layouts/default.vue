<template lang="pug">
.default-layout
  NuxtLoadingIndicator(:height="5")
  AppHeader
  NuxtPage
  AppFooter
</template>

<script lang="ts" setup>
useHead({
	titleTemplate: (title) => {
		return title ? `${title} - Test Blog` : "Test Blog";
	},
});
</script>

<style lang="scss">
.default-layout {
	display: flex;
	flex-direction: column;
	height: 100vh;

	max-width: 1420px;
	margin: 0 auto;
	padding: 0 20px;
}

// nuxt WTF
.nuxt-loading-indicator {
	opacity: 1 !important;
}
</style>
