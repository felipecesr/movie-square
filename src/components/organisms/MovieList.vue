<template>
  <ul>
    <movie-item
      v-for="item in movies"
      :key="item.id"
      :item="item"/>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MovieItem from "@/components/molecules/MovieItem.vue";

export default {
  components: { MovieItem },

  computed: mapState(['movies']),

  beforeMount() {
    this.fetchMovies({ type: 'movie' });
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
