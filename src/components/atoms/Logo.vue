<template>
  <router-link :to="{ name: 'Home' }">
    <img
      class="logo"
      src="@/assets/img/logo.svg"
      alt="MovieSquare! logo"
    >
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  width: 15.8rem;
}
</style>
