<!--  -->
<template>
<div>
    <tab-bar>
  <tab-bar-item path='/home' activeColor='yellow'>
    <img slot="item-icon" src="assets/img/tabbar/home.svg" alt="">
    <img slot="item-active-icon" src="assets/img/tabbar/home_active.svg" alt="">
    <div slot="item-text"> 首页 </div>
  </tab-bar-item>
  <tab-bar-item path='/category' activeColor='purple'>
     <img slot="item-icon" src="assets/img/tabbar/category.svg" alt="">
         <img slot="item-active-icon" src="assets/img/tabbar/category_active.svg" alt="">
    <div slot="item-text">分类 </div>
   </tab-bar-item>
  <tab-bar-item path='/cart' activeColor='lightBlue'>
    <img slot="item-icon" src="assets/img/tabbar/cart.svg" alt="">
        <img slot="item-active-icon" src="assets/img/tabbar/cart_active.svg" alt="">
    <div slot="item-text"> 购物车 </div>
  </tab-bar-item>
  <tab-bar-item path='/profile' activeColor='green'>
    <img slot="item-icon" src="assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active-icon" src="assets/img/tabbar/profile_active.svg" alt="">
    <div slot="item-text"> 我的 </div>
  </tab-bar-item>
</tab-bar>

</div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue"
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}


</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
