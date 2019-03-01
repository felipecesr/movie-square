<template>
  <div>
    <page-header />
    <v-hero
      :src="movie.backdrop_path | imageHost"
      :alt="movie.title || movie.name"
    />
    <v-title>{{ movie.title || movie.name }}</v-title>
    <p>{{ movie.overview }}</p>

    <h2>Episódios</h2>

    <movie-seasons
      :serie="movie.id"
      :seasons="movie.seasons"
    />
  </div>
</template>

<script>
import VTitle from "@atoms/VTitle.vue";
import VHero from "@atoms/VHero.vue";
import PageHeader from "@organisms/PageHeader.vue";
import MovieSeasons from "@organisms/MovieSeasons.vue";

export default {
  components: {
    VHero,
    VTitle,
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
