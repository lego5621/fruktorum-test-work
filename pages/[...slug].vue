<template lang="pug">
.content(v-if="!error")
  Component.content__block(
    v-for="block in blocks",
    :key="block.id",
    :is="getComponentName(block.type)",
    :id="block.id",
    :data="block.data ? block.data : null",
    :is-home-page='isHomePage ? true : null'
  )

.error(v-else) {{ error.statusCode }}
</template>

<script lang="ts" setup>
const route = useRoute();

const blocks = computed(() =>
	pageStructure.value.body?.filter((block: any) =>
		Object.values(BLOCK_TYPES).includes(block.type)
	)
);

const isHomePage = computed(() => PAGE_TYPES.HOME === pageStructure.value.page_type);

const { data: pageStructure, error }: any = await getPageStructure(
	route.fullPath
);

const pageTitle = () =>
	error.value
		? error.value.statusCode
		: pageStructure.value.meta?.title || '';

const pageDescription = () =>
	error.value
		? 'it`s error page'
		: pageStructure.value.meta?.description || '';

useSeoMeta({
	title: pageTitle,
	ogTitle: pageTitle,
	description: pageDescription,
	ogDescription: pageDescription,
});
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;

	&__block {
		margin-bottom: 100px;
	}
}

.error {
	display: flex;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	font-size: 60px;
}
</style>
