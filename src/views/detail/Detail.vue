<template>
<div class="detail">
<!--  详情页导航栏-->
  <nav-bar class="nav-bar">
    <div slot="left" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center" class="titles">
      <div v-for="(item,index) in titles"
           :class="{active:currentIndex == index}"
           @click="titleClick(index)"
           :key="index"
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
<!--    商品信息组件-->
    <detail-shop-info
    :shop="shopInfo"
    />
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto, atque culpa error incidunt ipsum maxime, nemo nisi quia sit soluta tenetur, voluptatem. A at aut blanditiis est eum excepturi illum incidunt ipsa itaque officia porro quaerat quasi qui quod, reprehenderit repudiandae sapiente sed tempore, veniam voluptates. Accusantium consequuntur enim, esse, eum impedit ipsa itaque nulla optio praesentium quam, recusandae rerum sequi tempore. A adipisci aliquid beatae culpa ea eaque iusto minima possimus quas quod repellat, reprehenderit saepe voluptatibus! Accusantium animi aperiam architecto at beatae consectetur consequatur distinctio dolorem eaque ex excepturi expedita fugiat harum iste, magnam molestias nesciunt officia perferendis, repellat unde veniam vero vitae. Animi aperiam aspernatur at aut, commodi corporis dignissimos dolore dolorem dolores dolorum ea et excepturi expedita facere fugit, incidunt ipsum labore libero minima necessitatibus nesciunt placeat, praesentium quae quaerat quidem quos ratione recusandae similique sit sunt tempora tenetur totam unde vel veritatis vero voluptas. Accusantium aliquam dicta eum possimus sunt. Consectetur cum, debitis deserunt dolores earum enim, explicabo maiores nihil nisi omnis recusandae repellendus sequi suscipit. Cupiditate, tempore, ut. Eligendi est iste nam quaerat, reprehenderit voluptatibus. A accusamus amet atque aut consequuntur dicta dignissimos, dolore eaque in iste iure, magnam numquam odio officiis quidem quisquam repellat similique tempora. Aut ducimus ea et labore quod ut, voluptatibus! Quae, veniam voluptatibus? Accusamus autem cumque eum quia reiciendis tempore veniam vitae! Consequuntur eaque eius in nihil! Asperiores aspernatur assumenda consequuntur doloribus hic illo, ipsam ipsum minus nesciunt obcaecati pariatur sequi soluta tempora, veritatis voluptatem. Ab assumenda debitis eos et illo ipsa qui repudiandae sapiente, voluptate voluptatum! At blanditiis dolorem ducimus illum maxime odit perspiciatis quam quas reiciendis repellendus. Doloremque ducimus esse excepturi harum itaque labore maxime necessitatibus repellat unde voluptatem! Ab, accusamus aut cum eius enim eos excepturi illo in inventore laborum, nostrum pariatur provident, tempore.</div>
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
    //  导入商品信息组件
      import DetailShopInfo from './childComps/DetailShopInfo'
    //  导入滚动组件
      import Scroll from 'components/common/scroll/Scroll'
    export default {
        name: "Detail",
      components:{
          NavBar,
          DetailSwiper,
          GoodsDetails,
          DetailShopInfo,
          Scroll
      },
      data(){
          return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0,
            iid:null,
            topImages:[],
            goodsInfo:{},
            shopInfo:{}
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
            console.log('good detail infomation:');
            console.log(res);
            const data = res.data.result
            //1.取出轮播图的数据
            this.topImages = res.data.result.itemInfo.topImages
          //  2.取出商品详情数据
          //  使用在home.js中创建的Goods类创建商品详情对象,并将其赋值给data中的goodsInfo
          //  注意这里的3个参数与该类创建时定义的3个参数是对应的
            this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            // console.log('good detail');
            // console.log(this.goodsInfo);
          //  3.取出店铺信息数据
            this.shopInfo = data.shopInfo
          })
      }

    }
</script>

<style scoped>
  .detail{
    height: 100vh;
    background-color: #fff;
    /*这里给详情页根盒子设置屏幕垂直距离为1，就可以盖住底部tabbar(tabbar的z-index设置为0)*/
    position: relative;
    z-index: 1;
  }
  .wrapper{
    overflow-y: auto;
    /*这里给滚动wrapper盒子设置高度为总高度减去顶部导航栏的高度44px*/
    height: calc(100% - 44px)
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
