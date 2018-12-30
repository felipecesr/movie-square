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
import MovieItem from "@molecules/MovieItem.vue";

export default {
  components: { MovieItem },

  computed: mapState(['movies']),

  beforeMount() {
    this.fetchMovies();
  },

  mounted() {
    this.scroll();
  },

  methods: {
    ...mapActions(['fetchMovies']),

    bottomOfWindow([scrollTop, innerHeight, offsetHeight], cb) {
      const isBottom = Math.round(scrollTop + innerHeight) === offsetHeight;

      if (isBottom) {
        cb();
      }
    },

    scroll() {
      window.onscroll = () => {
        const arr = [
          document.documentElement.scrollTop,
          window.innerHeight,
          document.documentElement.offsetHeight
        ];

        this.bottomOfWindow(arr, this.fetchMovies);
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
