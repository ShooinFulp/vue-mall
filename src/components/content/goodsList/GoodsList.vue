<template>
  <div class="goods-list" >
    <goods-list-item
      class="goods-item"
      v-for="(item,index) in goodsList"
      :key="index"
      :goods="item"
      @click.native="itemClick(item.goods_id)"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },methods: {
    itemClick(id){
      this.$emit('itemClick',id)
    }
  },
};
</script>

<style  scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-item {
  width: 48%;
}
</style>