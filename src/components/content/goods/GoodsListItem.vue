<template>
<div class="goods-item" @click="itemClick">
  <img :src="showImage" alt="">
  <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
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
            // console.log('goods item been clicked!')
            // console.log(this.goodsItem)
              //使用query方式路由组件
              this.$router.push({
                //这里的path路径必须和目标组件的path一致
                path:'/detail/',
                //这里的id和router/index.js里面的路由配置中的冒号后面的id对应
                query:{id:this.goodsItem.iid}
              //  这样到时候id会展示到url中
              })
          }
        },
        computed:{
          //提供2中获取图片的方式，如果前者没有则返回后者
          showImage(){
            return this.goodsItem.image || this.goodsItem.show.img
          }
        }
    }
</script>

<style scoped>
.goods-item{
  padding-bottom:40px;
  position:relative;
  width: 48%;
  margin-left: 4px;
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
