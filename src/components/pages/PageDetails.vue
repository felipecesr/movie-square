<template>
  <template-details
    v-if="serie"
    :movie="serie"
  />
</template>

<script>
import { getDetails } from "../../services/api/series.js";
import TemplateDetails from "@templates/TemplateDetails.vue";

export default {
  components: { TemplateDetails },

  props: {
    id: {
      required: true,
      type: Number
    }
  },

  data() {
    return {
      serie: null
    };
  },

  mounted() {
    this.fetchDetails();
  },

  methods: {
    async fetchDetails() {
      const { data } = await getDetails(this.id);
      this.serie = data;
    }
  }
};
</script>

<style>
</style>
