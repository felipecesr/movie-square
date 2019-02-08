<template>
  <div>Loading...</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      observer: null
    };
  },

  mounted() {
    this.observer = new IntersectionObserver(this.fetchMovies);
    this.observer.observe(this.$el);
  },

  destroyed() {
    this.observer.disconnect();
  },

  methods: mapActions(['fetchMovies'])
}
</script>

<style>

</style>
