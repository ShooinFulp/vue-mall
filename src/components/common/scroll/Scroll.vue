<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: {}
    };
  },
  components: {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    });

    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    this.scroll.on("pullingUp", () => {
      console.log("拉到底了");
      this.$emit("onPullUp");
      this.scroll.finishPullUp();
    });
  },
  watch: {
    data() {
      setTimeout(() => {
        this.scroll.refresh();
      }, 20);
    }
  },
  methods: {
    scrollTo(x, y) {
      this.scroll && this.scroll.scrollTo(x, y);
    },
    refresh() {
      this.scroll.refresh();
      console.log("刷新啦");
    }
  }
};
</script>

<style  scoped>
</style>