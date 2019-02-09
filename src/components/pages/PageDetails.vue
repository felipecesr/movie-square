<template>
  <div v-if="selectedMovie">
    <router-link :to="{ name: 'Home' }">Voltar</router-link>
    <img
      :src="selectedMovie.backdrop_path | imageHost"
      :alt="selectedMovie.title || selectedMovie.name"
    >
    <h1>{{ selectedMovie.title || selectedMovie.name }}</h1>
    <p>{{ selectedMovie.overview }}</p>

    <h2>Episódios</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    id: {
      required: true,
      type: Number
    }
  },

  computed: mapGetters(['selectedMovie']),

  mounted() {
    this.fetchMovie(this.id)
  },

  methods: mapActions(['fetchMovie'])
}
</script>

<style>

</style>
