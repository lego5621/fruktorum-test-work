<template lang="pug">
button(:class="['app-button', `app-button--${mode}`]")
  slot
</template>

<script lang="ts" setup>
defineProps({
  mode: {
    type: String as PropType<"mode1" | "mode2">,
    default: "mode1",
  },
});
</script>

<style lang="scss">
.app-button {
  padding: 10px 50px;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  border-radius: 2px;
  background: var(--background-black, #1b1b1b);
  color: #fff;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;

  &--mode1 {
    background: var(--background-black, #1b1b1b);

    &:hover {
      background: var(--background-blue, #3657d3);
    }
  }

  &--mode2 {
    background: var(--background-blue, #3657d3);

    &:hover {
      background: transparent;
      box-shadow: 0 0 0 1px var(--background-blue, #3657d3);
    }
  }
}
</style>
