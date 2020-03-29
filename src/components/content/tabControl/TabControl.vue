<template>
  <div class="tabControl">
    <div
      class="tabControlItem"
      v-for="(item,index) in titles"
      :key="index"
      @click="btnClick(index)"
    >
      <span :class="{active:currentIndex==index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index;
      this.$emit("indexChange", this.currentIndex);
    }
  }
};
</script>

<style  scoped>
.tabControl {
  height: 50px;
  text-align: center;
  font-size: 15px;
  display: flex;
  line-height: 50px;
  position: sticky;
  top: 0px;
  z-index: 9;
  background-color: white;
}
.tabControlItem {
  flex: 1;
}
.tabControlItem span.active {
  border-bottom: 2px solid pink;
  padding: 5px;
}
</style>