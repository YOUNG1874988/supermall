<template>
<div>
<!--  详情页导航栏-->
  <nav-bar class="nav-bar">
    <div slot="left" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center" class="titles">
      <div v-for="(item,index) in titles"
           :class="{active:currentIndex == index}"
           @click="titleClick(index)"
           >{{item}}</div>
    </div>
  </nav-bar>
<!--用scroll 组件包裹以使其可以滚动-->
  <scroll class="wrapper">
<!--  详情页轮播图组件-->
  <detail-swiper :top-images="topImage"/>
<!--商品详情组件-->
  <goods-details :good-detail="goodsInfo"
                 />
  </scroll>
<!--  <h2>this good's id is:{{// this.$route.query.id}}</h2>-->
</div>
</template>

<script>
      import NavBar from 'components/common/navbar/NavBar'
    //导入商品详情数据请求
      import {getGoodsDetail,Goods} from 'network/home'
    //  导入详情页轮播图组件
      import DetailSwiper from './childComps/DetailSwiper'
    //  导入商品详情组件
      import GoodsDetails from "./childComps/GoodsDetails";
    //  导入滚动组件
      import Scroll from 'components/common/scroll/Scroll'
    export default {
        name: "Detail",
      components:{
          NavBar,
          DetailSwiper,
          GoodsDetails,
          Scroll
      },
      data(){
          return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0,
            iid:null,
            topImages:[],
            goodsInfo:{}
          }
      },
      methods:{
        titleClick(index){
          this.currentIndex = index
        },
        backClick(){
          this.$router.go(-1)
        }
      },
      computed:{
          topImage(){
             return this.topImages
          }
      },
      created() {
          this.iid = this.$route.query.id
          getGoodsDetail(this.iid).then(res => {
            const data = res.data.result
            this.topImages = res.data.result.itemInfo.topImages
          //  使用在home.js中创建的Goods类创建商品详情对象,并将其赋值给data中的goodsInfo
          //  注意这里的3个参数与该类创建时定义的3个参数是对应的
            this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            console.log('good detail');
            console.log(this.goodsInfo);
          })
      }

    }
</script>

<style scoped>
  .wrapper{
    height: 500px;
    overflow-y: auto;
  }
.nav-bar img{
  width: 35%;
  margin-top: 11px;
  margin-left: 10px;
  ;
}
  .titles{
    display: flex;
  }
  .titles div{
    flex: 1;
    font-size: 13px;
  }
  .active{
    color:deeppink;
  }
</style>
