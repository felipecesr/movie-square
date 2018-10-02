<template>
  <li>
    <a
      :href="item.id"
      :title="item.title || item.name">
      <img
        :src="item.poster_path | imageHost"
        :alt="item.title || item.name">
    </a>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 100%;
}
</style>
