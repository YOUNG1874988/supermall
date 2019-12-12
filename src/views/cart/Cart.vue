<!--  -->
<template>
<div class='cart'>
<!--  导航栏-->
<nav-bar class="navbar">
<div slot="center">
  购物车({{this.$store.state.cartList.length}})
</div>
</nav-bar>
<!--购物车商品列表-->
  <scroll class="wrapper">
    <cart-list />

  </scroll>
<!--  底部工具栏-->
  <cart-bottom-bar class="bottom-bar" />
</div>


</template>

<script>
// Vue.component(Loadmore.name,Loadmore)
import Scroll from 'components/common/scroll/Scroll'
import NavBar from "../../components/common/navbar/NavBar";
import { getHomeGoods } from "network/home";//导入商品数据请求
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
export default {
data() {
return {
 list: [],//储存数据
 allLoaded: false
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
    // this.getList(1)
},
components:{
  NavBar,
  CartList,
  Scroll,
  CartBottomBar
},
methods:{
    //当上拉时调用的方法
    loadBottom() {
      this.$refs.loadmore.onBottomLoaded();
      this.getList();
    },
    //此处是你通过调用后端接口获取的信息
    getList(type) {
          getHomeGoods(type).then(res => {
        console.log(res);
        //   this.list = this.list.concat(res.data.body.content);
        //   console.log(this.list);
        //将请求到的数据推到该组件对应类型的goods中
        this.list.push(...res.data.data);
        console.log(this.list+'are yo ok??')
        //将page+1，下次调用该方法时就是加载下一页了
        // this.goods[type].page += 1;
          })
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.cart{

}
.wrapper{
  /*height: calc(100% - 44px);*/
  height: calc(100% - 93px);
  overflow-y: auto;
  position: absolute;
  top: 44px;
  bottom: 50px;
  right: 0;
  left: 0;
}
.navbar{
  background-color: #EF8899;
  color: white;
  font-size: 22px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
}
  .bottom-bar{
    height: 40px;
    background-color: #F1F0F2;
    /*如果找不到相对定位的父元素，就相对于根元素进行定位*/
    position: absolute;
    bottom: 55px;
    left: 0;
    right: 0;
  }
</style>
