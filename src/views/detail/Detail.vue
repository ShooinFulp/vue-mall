<template>
  <div>
    <detail-nav-bar
      :titles="titles"
      class="navbar"
      @backClick="backClick"
      @titleClick="titleClick"
      ref="detailNavBar"
    ></detail-nav-bar>
    <scroll class="scroll" ref="scroll" @scroll="scroll">
      <div>
        <detail-swiper :banners="banners"></detail-swiper>
        <detail-info :info="this.detailInfo"></detail-info>
        <div v-html="html"></div>
      </div>
    </scroll>
    <detail-bottom class="detail-buttom" @addToCart='addToCart'></detail-bottom> 
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailInfo from "./childComps/DetailInfo";
import DetailBottom from "./childComps/DetailButtom";

import Scroll from "components/common/scroll/Scroll";

import { startEvent } from "common/mixin";

import { getBanners, DetailI } from "network/detail";
export default {
  name: "Dtail",
  data() {
    return {
      id: "",
      titles: ["商品", "店铺", "评价", "详情"],
      banners: [],
      detailInfo: {},
      html: ""
    };
  },
  components: { DetailNavBar, DetailSwiper, DetailInfo, Scroll,DetailBottom },
  created() {
    this.id = this.$route.query.id;
    console.log(this.id);

    getBanners(this.id)
      .then(data => {
        console.log(data);
        this.banners = data.message.pics.map(value => {
          return value.pics_big_url;
        });
        this.detailInfo = new DetailI(data.message);
        this.html = data.message.goods_introduce;
        console.log(this.banners);
      })
      .catch(err => {
        console.log(err);
      });
  },
  mixins: [startEvent],
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -200 * index);
      console.log(this.$refs.scroll);
    },
    scroll(position) {
      if (position.y >= -200) {
        this.$refs.detailNavBar.currentIndex = 2;
      }
    },addToCart(){
        this.$store.dispatch('addToCart',this.detailInfo)
    }
  }
};
</script>

<style  scoped>
.scroll {
  position: absolute;
  top: 44px;
  bottom: 100px;
  left: 0;
  right: 0;
  z-index: 899;
}
.navbar {
  position: relative;
  z-index: 1999;
}
.detail-buttom{
  z-index: 5000;
}
</style>