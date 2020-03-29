<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="[ '新品','流行','精选' ]"
      @indexChange="typeChange"
      ref="tabControl1"
      class="tab-contol"
      v-show="isShowTabControl"
    />
    <scroll
      class="content"
      ref="scroll"
      @onPullUp="getGoodsList"
      :data="goodsList"
      @scroll="scroll"
    >
      <div>
        <home-swiper :banners="banners" ref="hSwiper" @imgLoad="imgLoad"></home-swiper>
        <home-recommend-view :recommends="recommends" class="whitebg"></home-recommend-view>
        <feature />
        <tab-control :titles="[ '新品','流行','精选' ]" @indexChange="typeChange" ref="tabControl" />
        <goods-list :goodsList="goodsList" class="whitebg" @itemClick="itemClick" />
      </div>
    </scroll>
    <back-top class="top" @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import Feature from "./childComps/Feature";

import { getBannerData, getGoodsData } from "network/home";

import { debounce } from "common/utils";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: [],
      lxpage: 1,
      jxpage: 10,
      xxpage: 20,
      currentType: 0,
      isShowBackTop: false,
      tabOffsetTop: 0,
      currentPosition: -1,
      deactivatedY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getBannerData();
    this.getGoodsList();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("imgLoad", () => {
      console.log("-----");
      refresh();
    });
  },
  computed: {
    isShowTabControl() {
      console.log(this.tabOffsetTop, this.currentPosition);

      return this.tabOffsetTop < this.currentPosition;
    }
  },
  methods: {
    getBannerData() {
      getBannerData()
        .then(data => {
          console.log(data);
          this.banners = data.data["banner"].list;
          this.recommends = data.data["recommend"].list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getGoodsList() {
      let page = 0;
      switch (this.currentType) {
        case 0:
          this.xxpage += 1;
          page = this.xxpage;
          break;
        case 1:
          this.lxpage += 1;
          page = this.lxpage;
          break;
        case 2:
          this.jxpage += 1;
          page = this.jxpage;
          break;
      }
      getGoodsData(page)
        .then(data => {
          console.log(data);
          this.goodsList.push(...data.message.goods);
          // setTimeout(()=>{
          //   this.$refs.scroll.scroll.refresh();
          // },300)
        })
        .catch(err => {
          console.error(err);
        });
    },
    typeChange(index) {
      this.currentType = index;
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
      this.getGoodsList();
    },
    backTop() {
     // this.$refs.scroll.scrollTo(0, 0);
     this.$toast.show();
      console.log(123);
    },
    scroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.currentPosition = -position.y;
      //console.log(this.isShowTabControl);
    },
    imgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.$refs.tabControl.$el.offsetTop);
    },
    itemClick(id) {
      console.log(id);
      this.$router.push({
        path: "/detail",
        query: {
          id
        }
      });
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.deactivatedY);

    this.$refs.scroll.refresh();
  },
  destroyed() {
    console.log("destroyla !!!!!!");
  },
  deactivated() {
    this.deactivatedY = this.$refs.scroll.scroll.y;
    // console.log(ths.deactivatedY);
  }
};
</script>

<style  scoped>
.nav-bar {
  position: relative;
  z-index: 45;
}

.content {
  position: absolute;
  top: 48px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.top {
  position: fixed;
  right: 10px;
  bottom: 60px;
  z-index: 1000;
}

.whitebg {
  background-color: white;
}

.tab-contol {
  position: relative;
  top: 0;
  right: 0;
  z-index: 50;
}
</style>