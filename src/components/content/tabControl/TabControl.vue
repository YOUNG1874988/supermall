<template>
<div class="tab-control">
  <div v-for="(item,index) in titles" class="tab-control-item" @click="btnClick(index)" :class="{active:index === currentIndex}" :key="index">
    <span>
    {{item}}
    </span>
  </div>
</div>
</template>

<script>
    export default {
        name: "TabControl",
        data(){
          return {
              currentIndex:0
          }
        },

        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
          btnClick(index){
              this.currentIndex = index
              this.$emit('itemClick',index)
              console.log('you are clicking me!!')
          }
        }


    }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #fff;
}
  .tab-control-item{
    flex:1;
    height:40px;
    line-height: 40px;
  }
  .tab-control-item span{
    padding:5px;
  }
  .active{
    color:var(--color-high-text)
  }
  .active span{
    border-bottom:4px solid orange;
  }
  /*.tab-control{
    !*对该盒子进行sticky定位，下面描述该盒子与其父元素的距离关系；
    1.当距离关系不满足时，该盒子为sticky粘性状态，位置随用户拖动正常滚动；
    2.当距离关系满足时，该盒子进入fixed状态，位置固定显示*!
    position:sticky;
    top:80px;
  }*/
  .tab-control{
    /*由于添加了scroll后其有了新的父元素，tab-control和home-nav不再是并列的兄弟元素，所以top值不再相对于它们的父元素home,而是相对于scroll组件，所以top值为0才能紧挨home-nav*/
    position: sticky;
    top:0;
    z-index: 3;
  }
</style>
