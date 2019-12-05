<template>
    <div class="good-detail">
    <div class="title">{{goodDetail.desc}}</div>
      <div class="price">
        <span class="newprice">{{goodDetail.price}}</span>
<!--        该接口的oldprice无数据，故手动添加一个样板-->
<!--        <span>{{ goodDetail.oldprice}}</span>-->
        <span class="oldprice">￥888</span>
        <span class="discount">{{goodDetail.discount}}</span>
      </div>
      <div class="columns">
<!--        这里只写&&后面会报错，加上前面的就不会报错；只要&&前面的值为真，返回的都是后面的值-->
        <span class="sale-count">{{goodDetail.columns&&goodDetail.columns[0]}}</span>
        <span class="collect">{{goodDetail.columns&&goodDetail.columns[1]}}</span>
<!--       这里的columns列中的数组元素依次对应从左到右轮播图中的图片，故
            按照数组长度-1的方式提取对应的service.name-->
        <span class="salereturn">{{goodDetail.columns&&goodDetail.service[goodDetail.service.length-1].name}}</span>
      </div>
      <div class="return">
            <span v-for="index in goodDetail.service&&goodDetail.service.length - 1">
                      <img :src="goodDetail.service[index -1].icon" alt="">

              <span>{{goodDetail.service[index -1].name}}</span>
            </span>
      </div>
    </div>

</template>

<script>
    export default {
        name: "GoodsDetails",
        props:{
          goodDetail:{
            type:Object,
            default(){
              return {}
            }
          },

        },
        components:{

        }
    }
</script>

<style scoped>
  .good-detail{
    padding: 10px 8px;
    font-family: 微软雅黑  ;
  }
.title{
}
.price{
  margin: 10px 0 10px 0;
}
  .newprice{
    color: deeppink;
    font-size: 24px;
  }
  .oldprice{
    text-decoration: line-through;
    color: #A9ABAA;
    margin-left: 5px;
  }
  .price .discount{
    padding: 2px 3px;
    background-color: orangered;
    border-radius: 8px;
    font-size: 13px;
    color: white;
    margin-left: 5px;
    position: relative;
    top:-8px;
  }
  .columns{
    color: #DBDAD9;
    border-top: 1px solid #ccc;
    padding-top: 20px;
  }
  .collect,
  .salereturn{
    margin-left: 40px;
  }

  .return{
    line-height: 60px;
    border-top: 1px solid #ccc;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    font-size:12px;
  }
  .return img{
    width: 12px;
    position: relative;
    top: 3px;
    margin-right: 3px;
  }

</style>
