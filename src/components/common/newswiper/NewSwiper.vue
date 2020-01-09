<!--  -->
<template>
<div>
          <!-- 从swiper网站引用的html格式,不能改动以和css和js文件相匹配 -->

 <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
          <!-- 设置图片的宽度为屏幕的宽度，可以让录播图的一张图片完整显示 -->
          <img src="../../../assets/img/home/banner1.jpg" alt=""  style="width:425px">
    </div>
      <div class="swiper-slide">
          <img src="../../../assets/img/home/banner2.jpg" alt=""  style="width:425px">
    </div>
      <div class="swiper-slide" style="width:200px;">
          <img src="../../../assets/img/home/banner3.jpg" alt=""  style="width:425px">
    </div>
      <div class="swiper-slide">
          <img src="../../../assets/img/home/banner4.jpg" alt="" style="width:425px">
    </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  
</div>
</div>
</template>

<script>
// 使用npm 安装swiper,并导入样式表
import Swiper from "swiper"
import "../../../css/swiper.min.css";

console.log(Swiper)
export default {
    name:'NewSwiper',
data() {
return {

}
},
props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }
},
methods:{
    // 轮播痛加载方法
    startSwiper(){
        console.log('hello swiper')
         var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
     
    },  
   
},

//生命周期 - 创建完成（访问当前this实例）
created() {

   
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
    // 当页面挂载完成后调用轮播图方法
 this.startSwiper()
}
}
</script>
<style scoped>
/* 将demo源码中的css复制过来 */
 .swiper-container {
      width: 100%;
      height: 50%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box; 
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex; 
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
.swiper-wrapper .swiper-slider img{
    /* 发现在这里设置图片的宽度是无效的，故给图片设置内联样式 */
     width: 120px;
    /* height: 50px;  */
}
</style>