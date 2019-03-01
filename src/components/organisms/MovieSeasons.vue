<template>
  <div>
    <select v-model="selectedSeason">
      <option
        v-for="season in seasons"
        :key="season.id"
        :value="season.season_number"
      >{{ season.name }}</option>
    </select>
    <episode-list
      :serie_id="serie"
      :season_number="selectedSeason"
    />
  </div>
</template>

<script>
import EpisodeList from "@organisms/EpisodeList.vue";

export default {
  components: {
    EpisodeList
  },

  props: {
    serie: {
      required: true,
      type: Number
    },
    seasons: {
      required: true,
      type: Array
    }
  },

  data() {
    return {
      selectedSeason: 1
    };
  }
};
</script>

<style>
select {
  border: 2px solid #fff;
  padding: 0.5em;
}
</style>
