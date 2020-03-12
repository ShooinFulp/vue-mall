<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" >
        <img  slot="icon" src="~assets/img/tabbar/home.svg" alt />
        <img  slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="title">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <img slot="icon" src="~assets/img/tabbar/category.svg" alt />
        <img  slot="icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="title">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" > 
        <img slot="icon" src="~assets/img/tabbar/cart.svg" alt />
        <img  slot="icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="title">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img slot="icon" src="~assets/img/tabbar/profile.svg" alt />
        <img  slot="icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style  scoped>
</style>