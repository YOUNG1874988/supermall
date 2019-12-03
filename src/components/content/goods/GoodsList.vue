<template>
<div class="goods">
<!--  这里的goods-item绑定每一个独立的item,用于在该组件中显示每个item的图片，titel,price等信息-->
<!--  在item组件中没有插槽，所以这里的组件中不用写东西-->
  <goods-list-item v-for="item in goods" :goods-item="item" :key="item.id"></goods-list-item>

</div>
</template>

<script>
    import GoodsListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            GoodsListItem
        }

    }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
}
</style>
