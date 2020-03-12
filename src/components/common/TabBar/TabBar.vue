<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  height: 49px;
}

</style>