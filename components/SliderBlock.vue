<template lang="pug">
.slider-block
  Carousel(
    :items-to-show="1",
    :wrap-around="true",
    :autoplay="2000",
    :pause-autoplay-on-hover="true",
    ref="carousel",
    v-model="currentSlide"
  )
    template(v-slot:slides)
      Slide(v-for="slide in data", :key="slide")
        .slider-block__item
          img(:src="slide")

    template(v-slot:addons)
      navigation
  .slider-block__info-panel
    div {{ currentSlide + 1 }} / {{ data.length }}
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

defineProps({
	data: {
		type: Array as PropType<string[]>,
		required: true,
	},
});

const currentSlide = ref<number>(0);
</script>

<style lang="scss">
.slider-block {
	&__item {
		max-width: 1112px;
		max-height: 550px;

		img {
			width: 100%;
			overflow: hidden;
		}
	}

	&__info-panel {
		display: flex;
		justify-content: center;
		margin-top: 25px;
		user-select: none;

		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px;
	}
}
</style>
