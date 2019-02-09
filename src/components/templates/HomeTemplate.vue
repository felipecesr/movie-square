<template>
  <div class="home">
    <page-header/>
    <div class="full hide-scroll">
      <movie-list/>
    </div>
  </div>
</template>

<script>
import PageHeader from '@organisms/PageHeader.vue';
import MovieList from '@organisms/MovieList.vue';

export default {
  components: {
    PageHeader,
    MovieList
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 3.3rem 0;
  display: grid;
  grid-gap: var(--gutter) 0;
  grid-template-columns: var(--gutter) 1fr var(--gutter);
  align-content: start;

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
}

.hide-scroll {
  overflow-y: hidden;
  margin-bottom: calc(-.1 * var(--gutter));
}
</style>
