<!--  -->
<template>
<div>
    <div id="tab-bar">
      <slot> </slot>
    </div>

</div>
</template>

<script>
export default {
data() {
return {
    name:'TabBar'

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
@import "../../../assets/css/base.css";
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position:fixed;
  left:0;
  right: 0;
  bottom:0;
  box-shadow:0 -4px 5px orange;
  z-index: 10;
}
</style>
