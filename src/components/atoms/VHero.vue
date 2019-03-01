<template>
  <img
    :src="src"
    :alt="alt"
  >
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
