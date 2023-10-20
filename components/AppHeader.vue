<template lang="pug">
nav.app-header
  NuxtLink.app-header__logo(to="/")
    img(src="/img/logo.svg", alt="logo")
</template>

<style lang="scss">
.app-header {
  display: flex;
  justify-content: center;

  &__logo {
    padding: 20px;
  }
}
</style>
