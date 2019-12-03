<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="wrap"></div>
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true">
      <home-swiper :banners="banners" @imgLoaded='swiperImgLoaded' />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行','新品','热卖']" @itemClick="itemClick" ref="tabControl"/>
      <goods-list :goods="showGoods" />
      <!-- mint-ui的上拉加载插件 -->
      <!-- <mt-loadmore
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :auto-fill="false"
        ref="loadmore"
      >
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="name">{{item.noticeTitle}} + {{index}}</div>
        </div>
      </mt-loadmore> -->
    </scroll>

    <!-- 使用element-ui的已封装组件el-backtop定义返回顶部按钮 -->
    <el-backtop target=".content" :bottom="70" :right="20">
      <div class="back_top">
        <img src="~assets/img/common/top.png" alt />
      </div>
    </el-backtop>
  </div>
</template>

<script>
//导入首页相关数据
import { getHomeMultidata } from "network/home";
import { getHomeGoods } from "network/home";
//导入首页各个组件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

//导入滚动插件
import Scroll from "components/common/scroll/Scroll";
// 导入mint的上拉加载插件
// import { Loadmore } from "mint-ui";
export default {
  data() {
    return {
      
      // 存储加载的数据
    //   list: [],
    //   // 是否加载完全部数据
    //   allLoaded: false,
      banners: [],
      recommends: [],
      titles: [],
      //titles下的商品数据
      goods: {
        0: { page: 0, data: [] },
        1: {
          page: 0,
          data: []
        },
        2: {
          page: 0,
          data: []
        }
      },
      currentType: 0,
      tabOffsetTop:0

    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    // "mt-loadmore": LoadMore
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    //  1.请求首页多个数据（轮播图，推荐商品，3个titles)
    this.getHomeMultidata2();

    //  2.请求3个titles下的商品数据
    this.getHomeGoods(0);
    this.getHomeGoods(1);
    this.getHomeGoods(2);
  },
  // destory(){
  //   console.log('the home page has been destroyed!!')
  // },
  mounted() {
    // this.getlist();
   console.log(this.$refs.tabControl.$el.offsetTop)
  },
  //展示当前类型的商品数据
  computed: {
    //
    showGoods() {
      return this.goods[this.currentType].data;
    }
  },
  methods: {
    /*响应式函数*/
    swiperImgLoaded(){
      console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }, 
    //  上拉时调用该方法
    // loadBottom() {
    //   this.$refs.loadmore.onBottomLoaded();
    //   this.getList();
    // },
    // //此处是你通过调用后端接口获取的信息
    // getList() {
    //   //具体请求参数要根据后端定
    //   let params = {
    //     pageNumber: 0,
    //     pageSize: 10 //每次请求10条数据
    //   };
    //   this.$axios.post("https://www.ifanv.com/api/test", params).then(res => {
    //     this.list = this.list.concat(res.data.data);
    //     console.log(this.list);
    //   });
    // },
    //从tab-control组件发送过来的事件对应的方法，点击tab-control titles可以切换对应的数据
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = 0;
          break;
        case 1:
          this.currentType = 1;
          break;
        case 2:
          this.currentType = 2;
          break;
      }
    },
    /* 数据请求函数  */
    getHomeMultidata2() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      /*              将页码设置为动态可变，即当某一页加载完成后，页数+1指向下一页，
                              下次再次调用该该方法进行数据请求的时候请求的就是下一页的数据*/
      const page = this.goods[type].page + 1;
      //对应created()中的3次调用
      getHomeGoods(type, page).then(res => {
        console.log(res);
        //将请求到的数据推到该组件对应类型的goods中
        this.goods[type].data.push(...res.data.data);
        //将page+1，下次调用该方法时就是加载下一页了
        this.goods[type].page += 1;
      });
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#home {
  /* padding-top: 44px; */
  /*position: relative;*/
}

.home-nav {
  background-color: var(--color-tint);
  height: 44px;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
  font-size: 22px;
  color: white;
}

.wrap {
  position: absolute;
}

.content {
  overflow-y: auto;
overflow: scroll;
height: 500px;
  /*这里的content滚动盒子使用绝对定位，是相对于整个app组件进行定位的;
    所以要给app组件的根元素设置为相对定位，距离顶部44px,距离底部49px才是正确的*/

  /*发现给content的祖先元素设置相对定位后，content的内容会变为空，只有不给其祖先元素设置相对定位
    ，content才能正常显示，故当前其祖先元素没有设置相对定位*/
  position: absolute;
  top: 48px;
  bottom: 49px;
  left: 0;
  right: 0;
  /*height: calc(100% - 500px);*/
}
.back_top {
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: green;
  border-radius: 100%;
  z-index: 20;
}
.back_top img {
  width: 50px;
  margin-left: -5px;
  margin-top: -3px;
}
</style>
