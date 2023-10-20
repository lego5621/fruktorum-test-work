<template lang="pug">
.article-list
  h1.article-list__title(v-if="!isHomePage") {{ data.title }}
  .article-list__container
    AppCard(
      v-for="article in data.articles",
      :key="article.link",
      :data="article"
    )
</template>

<script lang="ts" setup>
import type { Card } from "@/types";

interface ArticleList {
	title: string;
	articles: Card[];
}

defineProps({
	data: {
		type: Object as PropType<ArticleList>,
		required: true,
	},
	isHomePage: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss">
.article-list {
	&__title {
		color: var(--text-black, #1b1b1b);
		font-size: 34px;
		font-style: normal;
		font-weight: 800;
		line-height: 46px;
		margin-bottom: 50px;
	}

	&__container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 30px;
	}
}
</style>
~/putes/card
