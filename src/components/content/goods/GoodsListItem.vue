<template>
<div class="goods-item" @click="itemClick">
  <img :src="goodsItem.img" alt="">
  <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
  </div>
</div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
            goodsItem:{
                type:Object,
                default(){
                    return []
                }
            }
        },
        methods:{
          itemClick(){
            console.log('go to the detail page of the good!!')
              //+后面的为各个商品对应的独有的ID，和router/index.js里面的路由配置中的冒号后面的id对应
              this.$router.push('/detail'+'yangjun')
          }
        }
    }
</script>

<style scoped>
.goods-item{
  padding-bottom:40px;
  position:relative;
  width: 48%;
  margin-left: 5px;
}
  .goods img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position:absolute;
    bottom:5px;
    left:0;
    right: 0;
    overflow:hidden;
    text-align:center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom:3px;
  }
  .goods-info .price{
    color:var(--color-high-text);
    margin-right:20px;
  }
  .goods-info .collect{
    position:relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    /*background:url() position/size  */
    /*即图片的位置是距离顶部和左边都为0，大小是宽和高都为0*/
    background:url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
