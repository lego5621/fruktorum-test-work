<template lang="pug">
.intro-block
  .intro-block__image
    img(:src="data.image", :alt="data.title")

  .intro-block__description
    h1.intro-block__title
      | {{ data.title }}

    .intro-block__meta
      p.intro-block__meta-item.intro-block__meta-item--reading-time
        | {{ data.reading_time }} мин время чтения
      p.intro-block__meta-item.intro-block__meta-item--views-count
        | {{ data.views_count }} прочитали статью

    .intro-block__text
      | {{ data.short_description }}
</template>

<script lang="ts" setup>
interface Intro {
	image: string;
	title: string;
	reading_time: number;
	views_count: number;
	short_description: string;
}

defineProps({
	data: {
		type: Object as PropType<Intro>,
		required: true,
	},
});
</script>

<style lang="scss">
.intro-block {
	display: flex;
	flex-wrap: wrap;
	gap: 30px;

	&__image {
		flex-basis: calc(43.3% - 30px);
		border-radius: 2px 220px 2px 2px;
		overflow: hidden;

		img {
			width: 100%;
		}

		@media screen and (max-width: 1340px) {
			flex-basis: 100%;
			height: 200px;
			border-radius: 10px;
			object-fit: cover;
		}
	}

	&__description {
		flex-basis: 56.7%;

		.intro-block__title {
			margin: 90px 0 30px 0;
			color: var(--text-black, #1b1b1b);
			font-size: 56px;
			font-style: normal;
			font-weight: 800;
			line-height: 66px;
		}

		.intro-block__text {
			color: var(--text-black, #1b1b1b);
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 26px;
		}

		.intro-block__meta {
			display: flex;
			flex-direction: column;
			gap: 4px;
			margin-bottom: 50px;

			&-item {
				color: var(--text-gray, #8d959c);
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				line-height: 20px;
				display: flex;
				align-content: center;

				&--reading-time::before {
					margin-right: 8px;
					content: '';
					display: inline-block;
					width: 16px;
					height: 16px;
					background-image: url('/img/time.svg');
					background-size: cover;
					align-self: center;
				}

				&--views-count::before {
					margin-right: 8px;
					content: '';
					display: inline-block;
					width: 16px;
					height: 16px;
					background-image: url('/img/eye.svg');
					background-size: cover;
					align-self: center;
				}
			}
		}

		@media screen and (max-width: 1340px) {
			flex-basis: 100%;
		}
	}
}
</style>
