<template>
  <div>
    <page-header />
    <img
      :src="movie.backdrop_path | imageHost"
      :alt="movie.title || movie.name"
    >
    <h1>{{ movie.title || movie.name }}</h1>
    <p>{{ movie.overview }}</p>

    <h2>Episódios</h2>

    <movie-seasons
      :serie="movie.id"
      :seasons="movie.seasons"
    />
  </div>
</template>

<script>
import PageHeader from "@organisms/PageHeader.vue";
import MovieSeasons from "@organisms/MovieSeasons.vue";

export default {
  components: {
    PageHeader,
    MovieSeasons
  },

  props: {
    movie: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      details: null
    };
  }
};
</script>

<style>
</style>
