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
           >{{item}}
      </div>
    </div>
  </nav-bar>
<!--用scroll 组件包裹以使其可以滚动-->
  <scroll class="wrapper" ref="scroll" @scroll="contentScroll">
    <detail-swiper :top-images="topImage"/>
    <goods-details :good-detail="goodsInfo"/>
    <detail-shop-info :shop="shopInfo"/>
    <detail-params-info ref="params" :item-params="itemParams"/>
    <detail-comment-info ref="comment" :comment-info="commentInfo" />
    <goods-list ref="recommend" :goods="recommends" />
  </scroll>
  <detail-bottom-bar @addToCart="addToCart" />

  <!-- 使用element-ui的已封装组件el-backtop定义返回顶部按钮 -->
  <el-backtop target=".wrapper" :bottom="70" :right="20">
    <div class="back_top">
      <img src="~assets/img/common/top.png" alt />
    </div>
  </el-backtop>
<!--  <h2>this good's id is:{{// this.$route.query.id}}</h2>-->
<!--  <toast :message="东京我来了" />-->
</div>
</template>

<script>
      import NavBar from 'components/common/navbar/NavBar'
      //  导入滚动组件
      import Scroll from 'components/common/scroll/Scroll'
    //导入商品详情数据请求,详情页推荐数据请求
      import {getGoodsDetail,Goods,getRecommend} from 'network/home'
    //  导入详情页轮播图组件
      import DetailSwiper from './childComps/DetailSwiper'
    //  导入商品详情组件
      import GoodsDetails from "./childComps/GoodsDetails";
    //  导入店铺组件
      import DetailShopInfo from './childComps/DetailShopInfo'
    //  导入商品参数组件
      import DetailParamsInfo from "./childComps/DetailParamsInfo";
    //  导入商品评论信息组件
      import DetailCommentInfo from "./childComps/DetailCommentInfo";
    //  导入详情页推荐组件
      import GoodsList from 'components/content/goods/GoodsList'
      import DetailBottomBar from "./childComps/DetailBottomBar";
      import Toast from 'components/common/toast/Toast'
    export default {
        name: "Detail",
      components:{
          NavBar,
          DetailSwiper,
          GoodsDetails,
          DetailShopInfo,
          Scroll,
          DetailParamsInfo,
          DetailCommentInfo,
          GoodsList,
          DetailBottomBar,
          // Toast
      },
      data(){
          return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0,
            iid:'',
            topImages:[],
            goodsInfo:{},
            shopInfo:{},
            itemParams:{},
            commentInfo:{},
            recommends:[],
            themeToYs:[],
            price:null
          }
      },
      methods:{
          addToCart(){
            // console.log('hello Japan');
            //1.获取到该产品的信息
            const obj = {}
            obj.iid = this.iid
            obj.desc = this.goodsInfo.desc
            obj.img = this.topImages[0]
            obj.price = this.price
          //2.将产品信息放到购物车中
            this.$store.commit('addCart',obj)
          },
        contentScroll(pos){
          const positionY = -pos.y
          for(let i in this.themeToYs){
            //将监听到的位置y坐标与4个主题的offsettop值进行比较，看处在哪个主题的y坐标区间内；
            //如果该位置处在某一个位置的坐标区间，就打印该主题的下标值；
            //由于点击主题按钮监听到的位置通常是被点击按钮的最顶部开始位置，所以只有一个值，故打印一个
            // if (positionY > this.themeToYs[i] && positionY < this.themeToYs[i+1]){
            //   console.log(i);
            // }
            if (this.currentIndex !== i && ((i < length -1 && positionY >= this.themeToYs[i] &&
             positionY < this.themeToYs[i+1]) || (i === length - 1 && positionY >= this.themeToYs[i])) ){
              this.currentIndex = i;
              // console.log(i);

            }
          }
          },
        titleClick(index){
          this.currentIndex = index
          // console.log(index);
          this.$refs.scroll.scrollTo(0,-this.themeToYs[index],1000)
        },
        backClick(){
          this.$router.go(-1)
        },
        getOffsetTops(){

          this.themeToYs = []
          this.themeToYs.push(0)
          this.themeToYs.push(this.$refs.params.$el.offsetTop)
          this.themeToYs.push(this.$refs.comment.$el.offsetTop)
          this.themeToYs.push(this.$refs.recommend.$el.offsetTop)
          // console.log(this.themeToYs);
        }
      },
      computed:{
          topImage(){
             return this.topImages
          }
      },
      mounted() {

      },
      updated() {
         this.getOffsetTops()
      },
      created() {
          this.iid = this.$route.query.id
          getGoodsDetail(this.iid).then(res => {
            // console.log('the detail result is :');
            // console.log(res);
            const data = res.data.result
            this.price = data.itemInfo.lowPrice
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
          //  4.取出商品参数信息
            this.itemParams = data.itemParams
          //  5.对是否存在评论信息做判断，如果有，则取出；如果没有，则不取出
            if (data.rate.cRate !== 0){
              this.commentInfo = data.rate.list[0]
            }
          //  获取到数据后在下一帧将各个组件的offsetTop推入themeToYs
          //   this.$nextTick(() => {
          //     this.themeToYs = []
          //     this.themeToYs.push(0)
          //     this.themeToYs.push(this.$refs.params.$el.offsetTop)
          //     this.themeToYs.push(this.$refs.comment.$el.offsetTop)
          //     this.themeToYs.push(this.$refs.recommend.$el.offsetTop)
          //     // console.log(this.themeToYs);
          //   })
          })
          //获取推荐数据
          getRecommend().then(res => {
            // console.log('this is recommend data');
            // console.log(res);
            this.recommends = res.data.data.list
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
