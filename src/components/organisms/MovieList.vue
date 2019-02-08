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
    this.fetchMovies();
  },

  methods: mapActions(['fetchMovies'])
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  list-style: none;
}
</style>
