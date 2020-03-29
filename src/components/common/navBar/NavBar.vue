<template>
  <div class="nav-bar">
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="left">
      <slot name="left"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.nav-bar {
  display: flex;
  height: 48px ;
  text-align: center;
  line-height: 48px;
  background-color: pink;
  box-shadow: 0px 2px rgba(100, 100, 100, .05);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>