<template>
  <li>
    <a
      :href="item.id"
      :title="item.title || item.name"
    >
      <img
        v-lazy
        :data-src="item.poster_path | imageHost"
        :alt="item.title || item.name"
      >
      <div style="padding-bottom: 150%;" />
    </a>
  </li>
</template>

<script>
import { lazy } from "@/util/directives";

export default {
  directives: { lazy },

  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  position: relative;
  overflow: hidden;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background-color: #34323b;
  background: linear-gradient(
    to right,
    #34323b 8%,
    lighten(#34323b, 5%) 18%,
    #34323b 33%
  );
  background-size: 800px 104px;
}

img {
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s linear;

  &[data-src] {
    opacity: 0;
  }
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
