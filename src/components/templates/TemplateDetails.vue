<template>
  <div>
    <router-link :to="{ name: 'Home' }">Voltar</router-link>
    <img
      :src="movie.backdrop_path | imageHost"
      :alt="movie.title || movie.name"
    >
    <h1>{{ movie.title || movie.name }}</h1>
    <p>{{ movie.overview }}</p>

    <h2>Episódios</h2>

    <ul v-if="details">
      <li
        v-for="season in seasons"
        :key="season.id"
      >{{ season.name }}</li>
    </ul>
  </div>
</template>

<script>
// import { getOne } from "@/services/movieService";

export default {
  props: {
    movie: {
      required: true,
      type: Object
      // validator: value => ["syncing", "synced", "error"].includes(value)
    }
  },

  data() {
    return {
      details: null
    };
  },

  computed: {
    seasons() {
      return this.details.seasons;
    }
  },

  mounted() {
    // _axios
    //   .get(`/tv/${this.movie.id}`)
    //   .then(({ data }) => (this.details = data));
  }
};
</script>

<style>
</style>
