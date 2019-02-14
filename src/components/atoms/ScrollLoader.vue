<template>
  <div>Loading...</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      observer: null,
      prevX: 0
    };
  },

  mounted() {
    this.observer = new IntersectionObserver(this.handleObserver);
    this.observer.observe(this.$el);
  },

  destroyed() {
    this.observer.disconnect();
  },

  methods: {
    ...mapActions(['fetchPopularList']),

    handleObserver([ entry ]) {
      const x = entry.boundingClientRect.x;

      if (this.prevX > x) {
        this.fetchPopularList();
      }

      this.prevX = x;
    }
  }
}
</script>

<style scoped>
div {
  width: 10px;
}
</style>
