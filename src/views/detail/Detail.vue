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

<!--  详情页轮播图组件-->
  <detail-swiper :top-images="topImage"/>


<!--  <h2>this good's id is:{{// this.$route.query.id}}</h2>-->
</div>
</template>

<script>
      import NavBar from 'components/common/navbar/NavBar'
    //导入商品详情数据请求
      import {getGoodsDetail} from 'network/home'
    //  导入详情页轮播图组件
      import DetailSwiper from './childComps/DetailSwiper'
    export default {
        name: "Detail",
      components:{
          NavBar,
          DetailSwiper
      },
      data(){
          return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0,
            iid:null,
            topImages:[]
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
            console.log('the following data is about this good')
            console.log(res);
            this.topImages = res.data.result.itemInfo.topImages
          })
      }

    }
</script>

<style scoped>
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
