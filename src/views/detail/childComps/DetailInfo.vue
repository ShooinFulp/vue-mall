<template>
  <div>
    <p>{{this.info.name}}</p>
    <p>{{this.info.price}}</p>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>