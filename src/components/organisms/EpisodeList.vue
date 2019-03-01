<template>
  <ul>
    <li
      v-for="episode in season.episodes"
      :key="episode.id"
    >
      <img
        :src="episode.still_path | imageHost"
        :alt="episode.name"
      >
      <p>{{ episode.name }}</p>
    </li>
  </ul>
</template>

<script>
import { getSeason } from "../../services/api/series.js";

export default {
  props: {
    serie_id: {
      required: true,
      type: Number
    },
    season_number: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      season: 0
    };
  },

  watch: {
    season_number() {
      this.fetchSeason();
    }
  },

  methods: {
    async fetchSeason() {
      const { data } = await getSeason(this.serie_id, this.season_number);
      this.season = data;
    }
  }
};
</script>

<style>
</style>
