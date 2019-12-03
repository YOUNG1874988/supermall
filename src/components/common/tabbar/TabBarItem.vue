<!--  -->
<template>
<div class="tab-bar-item" @click='itemClick()'>
  <div v-if="!isActive"> <slot name="item-icon" >   </slot>
  </div>
  <div v-else> <slot name="item-active-icon" ></slot>
   </div>
<div :style="activeStyle"><slot name="item-text"></slot>
  </div>
 
</div>
</template>

<script>
export default {
name:'TabBarItem',
props:{
  // 这里的用来定义放置在父组件模版中的调用该组件时添加的一些属性的类型，方便下面方法调用
  path:String,
  activeColor:{
    type:String,
    default:'#ed6479'
  }
},
data() {
  return {
  // isActive:true
  }
},
computed:{
  // 判断当前组件是否处于活跃状态
  // 如果当前组件的完整路径中包含了在父组件模版中添加的path属性值，就说明对应组件处于活跃状态，正在给用户展示
  isActive(){
    return this.$route.path.indexOf(this.path) !== -1
  },
  activeStyle(){
    return this.isActive ? {color:this.activeColor} : {}
  }
},
methods:{
  itemClick(){
    // 代码实现点击组件路由
    this.$router.replace(this.path)
  }

},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.tab-bar-item {
  flex:1;
  text-align:center;
  height: 49px;
}
.tab-bar-item img{
  width:20px;
  height:20px;  
  margin-top:3px;
  vertical-align: center;
}
.active{
  color:#ed6479;
}

</style>