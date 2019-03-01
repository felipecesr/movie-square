<template>
  <ul>
    <movie-item
      v-for="item in movies"
      :key="item.id"
      :item="item"/>
    <scroll-loader/>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ScrollLoader from '@atoms/ScrollLoader.vue';
import MovieItem from '@molecules/MovieItem.vue';

export default {
  components: { MovieItem, ScrollLoader },

  computed: mapState(['movies']),

  mounted() {
    if (!this.movies.length) {
      this.fetchPopularList();
    }
  },

  methods: mapActions(['fetchPopularList'])
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 10px;
  grid-auto-flow: column;
  grid-auto-columns: calc(50% - var(--gutter) * 2);

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: calc(.75 * var(--gutter));
  margin-bottom: calc(-.25 * var(--gutter));

  &:before {
    content: '';
    width: 10px;
  }
}
</style>
