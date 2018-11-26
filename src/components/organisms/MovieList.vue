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

  data() {
    return {
      bottom: false
    };
  },

  computed: mapState(['movies']),

  watch: {
    bottom(bottom) {
      if (bottom) {
        this.fetchMovies();
      }
    }
  },

  created() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    })
  },

  beforeMount() {
    this.fetchMovies();
  },

  methods: {
    ...mapActions(['fetchMovies']),

    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
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
