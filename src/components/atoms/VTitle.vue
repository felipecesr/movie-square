<template functional>
  <h1>
    <slot />
  </h1>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-family: var(--font-secondary);
  font-weight: normal;
  color: var(--color-text-heading);
  margin-bottom: var(--space-xxs);
  line-height: var(--heading-line-height);

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    width: 23px;
    background-color: var(--color-accent);
    vertical-align: middle;
    margin-right: 20px;
  }
}
</style>
