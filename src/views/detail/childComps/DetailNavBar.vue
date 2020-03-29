<template>
  <div>
    <nav-bar>
      <div slot="right" class="right" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="center">
        <div
          v-for="(item,index) in titles"
          :key="item"
          :class="{active:index===currentIndex}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    backClick() {
      this.$emit("backClick");
    },titleClick(index  ){
      this.currentIndex = index
      this.$emit('titleClick',index)
    }
  }
};
</script>

<style  scoped>
.center {
  display: flex;
}
.center div {
  flex: 1;
}
.right {
  padding-top: 5px;
}
.active {
  color: white;
}
</style>