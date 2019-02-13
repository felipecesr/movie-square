<template>
  <template-details
    v-if="selectedMovie"
    :movie="selectedMovie"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TemplateDetails from "@templates/TemplateDetails.vue";

export default {
  components: { TemplateDetails },

  props: {
    id: {
      required: true,
      type: Number
    }
  },

  computed: mapGetters(["selectedMovie"]),

  mounted() {
    this.fetchMovie(this.id);
  },

  methods: mapActions(["fetchMovie"])
};
</script>

<style>
</style>
