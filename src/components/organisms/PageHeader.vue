<template>
  <header>
    <logo/>
  </header>
</template>

<script>
import Logo from '@atoms/Logo.vue';

export default {
  components: { Logo }
}
</script>

<style lang="scss" scoped>
header {
  padding-top: 3.3rem;
}
</style>
