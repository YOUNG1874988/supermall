<template>
  <div id="app">
    <!-- 使用keep-alive标签包裹路由展示区域的内容就可以实现离开被路由组件页面时该组件页面仍然存在，再次返回该页面是无需重新加载 -->
    <keep-alive><router-view></router-view>
      </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
export default {
  name: 'app',
  components: {
      MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
  /* #app{
    position: relative;
  } */

</style>
