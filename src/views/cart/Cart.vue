<!--  -->
<template>
<div class='parents'>
    <div>
        <ul>
            <li>非加载内容1</li>
            <li>非加载内容2</li>
            <li>非加载内容3</li>
            <li>非加载内容4</li>
            <li>非加载内容5</li>
            <li>非加载内容6</li>
            <li>非加载内容7</li>
            <li>非加载内容8</li>
            <li>非加载内容9</li>
            <li>非加载内容10</li>
            <li>非加载内容11</li>
            <li>非加载内容12</li>
            <li>非加载内容13</li>
            <li>非加载内容14</li>
            <li>非加载内容15</li>
            <li>非加载内容16</li>
            <li>非加载内容17</li>
            <li>非加载内容18</li>
            <li>非加载内容19</li>
            <li>非加载内容20</li>
        </ul>
    </div>

    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      ref="loadmore"
    >
    <div class="container">
      <div class="item" v-for="(item,index) in list" :key="index">
          <img :src="item.img" alt="">
        <div class="title">{{item.title}}</div>
        <div class="price">{{item.price}}</div>
      </div>

    </div>
    </mt-loadmore>

</div>

 
</template>

<script>
import { Loadmore } from "mint-ui";//引入相关子功能
// Vue.component(Loadmore.name,Loadmore)

import { getHomeGoods } from "network/home";//导入商品数据请求

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
    "mt-loadmore":Loadmore
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
.parents{
    height: 400px;
    overflow:scroll;
}
/* 给容器设置flex属性后，其子元素就会按照父盒子的flex属性进行展示 */
.container{
    display: flex;
    /* 使子元素可以按照其本身宽度进行换行，如果不设置wrap属性，所有的子元素会展示在一行 */
    flex-wrap: wrap;
    justify-content: space-around;
}
.item{

    /* flex-wrap: wrap; */
    width: 47%;
}
.item img{
width: 100%;
border-radius: 5%;

}

</style>