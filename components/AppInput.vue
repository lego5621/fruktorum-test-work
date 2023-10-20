<template lang="pug">
input.app-input(type="text", v-model="value")
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss">
.app-input {
  background-color: transparent;
  color: white;
  border: none;
  box-shadow: 0 1px 0 0 var(--border-gray, #8d959c);
  padding: 10px;

  &::placeholder {
    color: var(--text-gray, #8d959c);
  }

  &:focus {
    outline: none;
    box-shadow: 0 1px 0 0 var(--border-blue, #3657d3);
  }
}
</style>
