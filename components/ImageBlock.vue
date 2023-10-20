<template lang="pug">
.image-block
  .image-block__image
    img(:src="data.src", :alt="data.caption")

  .image-block__caption
    | {{ data.caption }}
</template>

<script lang="ts" setup>
interface ImageBlock {
	src: string;
	caption: string;
}

defineProps({
	data: {
		type: Object as PropType<ImageBlock>,
		required: true,
	},
});
</script>

<style lang="scss">
.image-block {
	&__image {
		border-radius: 2px 220px 2px 2px;
		overflow: hidden;

		img {
			width: 100%;
		}
	}

	&__caption {
		margin-top: 15px;
		color: var(--text-gray, #8d959c);
		text-align: end;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
	}
}
</style>
