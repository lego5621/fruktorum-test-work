<template lang="pug">
.app-card
  .app-card__img
    img(:src="data.image", :alt="data.title")

  .app-card__title {{ data.title }}

  .app-card__footer
    AppButton(@click="goTo(data.link)") Читать
</template>

<script lang="ts" setup>
import type { Card } from "@/types";

defineProps({
  data: {
    type: Object as PropType<Card>,
    required: true,
  },
});

const router = useRouter();

const goTo = (path: string) => router.push(path);
</script>

<style lang="scss">
.app-card {
  display: flex;
  flex-direction: column;
  width: 426px;

  &__img {
    overflow: hidden;
    height: 320px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    color: var(--text-black, #1b1b1b);
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;

    min-height: 60px;
    margin-bottom: 30px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
