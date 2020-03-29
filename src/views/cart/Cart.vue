<template>
  <div>
    <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
     
    </nav-bar>
     <div v-for="(item,index) in carts" :key="index">
        {{item}}
      </div>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  components: {
    NavBar
  },
  computed: {
    cartLength() {
      return this.$store.state.carts.length;
    },
    carts(){
      console.log(this.$store.state.carts);
      
      return this.$store.state.carts;
    }
  }
};
</script>

<style  scoped>
</style>