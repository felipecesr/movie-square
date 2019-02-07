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
import MovieItem from '@molecules/MovieItem.vue';

export default {
  components: { MovieItem },

  computed: mapState(['movies']),

  beforeMount() {
    this.fetchMovies();
  },

  mounted() {
    window.addEventListener('scroll', this.scrollHandler, false);
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler, false);
  },

  methods: {
    ...mapActions(['fetchMovies']),

    scrollHandler() {
      const isBottom = Math.round(document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight;

      if (isBottom) {
        this.fetchMovies();
      }
    }
  }
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
