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
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  height: 49px;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
}
</style>