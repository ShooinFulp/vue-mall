<template>
  <div class="tabbar-item" @click="itemClick">
    <div class="icon" v-if="!isActiviti">
      <slot name="icon"></slot>
    </div>
    <div class="icon" v-if="isActiviti">
      <slot name="icon-active"></slot>
    </div>
    <div class="title" :style="activitedColor">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    titleColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActiviti() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activitedColor() {
      return this.isActiviti ? { color: this.titleColor } : {};
    }
  }
};
</script>

<style  scoped>
.icon img {
  width: 24px;
  height: 24px;
}
.icon {
  vertical-align: middle;
  text-align: center;
}
.title {
  text-align: center;
}
.tabbar-item {
  flex: 1;
}
</style>