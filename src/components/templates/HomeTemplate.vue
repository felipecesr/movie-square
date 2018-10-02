<template>
  <div class="home">
    <page-header/>
    <movie-list/>
  </div>
</template>

<script>
import PageHeader from '@/components/organisms/PageHeader.vue';
import MovieList from '@/components/organisms/MovieList.vue';

export default {
  components: {
    PageHeader,
    MovieList
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-column: 1 / -1;
  grid-gap: 30px;
  padding: 0 36px;
}
</style>
