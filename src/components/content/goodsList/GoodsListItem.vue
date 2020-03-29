<template>
  <div class="goods">
    <div>
      <img :src="goods.goods_small_logo" alt @load="imageLoad" />
    </div>

    <div>
      <p>{{goods.goods_name}}</p>
      <span class="price">{{goods.goods_price}}￥</span>
      <span class="collect">{{goods.goods_id}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('imgLoad')
    }
  }
};
</script>

<style scoped>
.goods {
  text-align: center;
  font-size: 10px;
}

.goods img {
  width: 100%;
}
.goods p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods .price {
  color: var(--color-high-text);
  margin-right: 50px;
}
.goods .collect {
  position: relative;
}

.goods .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>