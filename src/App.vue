<template>
  <div id="app">
    <main-tab-bar/>
  </div>
</template>

<script>


import mainTabBar from "components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    mainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css"
</style>
