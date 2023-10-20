<template lang="pug">
NuxtLink.app-icon(:to="data.href")
  img(:src="data.image")
</template>

<script lang="ts" setup>
interface Icon {
  image: string;
  href: string;
}

defineProps({
  data: {
    type: Object as PropType<Icon>,
    required: true,
  },
});
</script>

<style lang="scss">
.app-icon {
  width: 30px;
  height: 30px;
}
</style>
