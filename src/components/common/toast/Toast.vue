<template>
  <div class="toast" v-if="isShow">{{message}}</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      message: ""
    };
  },
  methods: {
    show(message = "默认", interval = 1000) {
      this.isShow = true;
      this.message = message;
      setInterval(() => {
        this.isShow = false;
      }, interval);
    }
  }
};
</script>

<style  scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>