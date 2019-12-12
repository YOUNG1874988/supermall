<template>
    <div class="bottom-bar">
      <div class="check" >
        <img src="~assets/img/common/cart/tick.svg"
             class="checkout"
             :class="{selectall:isSelectedAll}"
             @click="checkClick"
             alt="">
        <div class="text">全选</div>
      </div>
      <div class="totalprice">
<!--        全选价格统计实现思路：
遍历state中cartList数组，如果checked为true，则表明被选中，将它们的价格相加即为总价格；
 -->
        <span>合计:￥{{totalPrice}}</span>
      </div>
      <div class="go-calculate">

        去结算({{totalCount}})
      </div>
    </div>
</template>

<script>
    export default {
        name: "CartBottomBar",
      data(){
          return{
            cartList:this.$store.state.cartList
          }
      },
      methods:{
          checkClick(){
            //点击全选按钮全选或全不选实现思路
            //1.遍历购物车中产品，查看是否存在checked为false的元素；
            //2.如果存在checked为false的元素，将其改为true;
            //3.如果不存在checked为false的元素，即所有元素的checked为true，则将所有元素的checked改为false；
           if(this.isSelectedAll){
             this.cartList.forEach(item => item.checked = false)
           }else{
             this.cartList.forEach(item => item.checked = true)
           }
          }
      },
      computed:{
          totalPrice(){
            //先过滤出购物车数组中所有已经被选中的元素
            //再讲他们的总价格计算出来
            const cartList = this.$store.state.cartList;
            console.log(cartList);
            return cartList.filter(item => {
              return item.checked
            }).reduce((prevalue, item) => {
              return prevalue + item.count * item.price
            }, 0).toFixed(2)
          },
        totalCount(){
            //先选出所有已经被选中的元素
            //再将它们的总数量计算出来
            const cartList = this.$store.state.cartList;
            return cartList.filter(item => {
              return item.checked
            }).reduce((prevalue,item) => {
              return prevalue + item.count
            },0).toFixed(0)

        },
        isSelectedAll(){
            const cartList = this.$store.state.cartList;
            //如果在购物车中能找到checked为false，即没有被选中的
            //商品，则返回false,使该图标不再全部选中状态

            //如果购物车为空，按照该方式查到结果为false，取反后为true,故需要先对购物车是否有产品做判断
            if(cartList.length === 0) {return false}
            return    !cartList.find(item =>
              !item.checked
            )
        }


      }
    }
</script>

<style scoped>
.check {
  position: relative;
  top: 11px;
  margin-left: 10px;

}
.check img{
  margin-right: 10px;
  background-color: #ccc;
  border-radius: 5px;
  border: 2px solid rgba(0,0,0,.1);
}
.check .selectall{
  background-color: red;
}
.check .text{
  float: right;
  position: absolute;
  left: 30px;
  top: 2px;
}
  .totalprice{
    position: absolute;
    left: 100px;
    top: 13px;
  }
  .go-calculate{
    position: absolute;
    top: 1px;
    right: 2px;
    background-color: red;
    height: 40px;
    width: 80px;
    line-height: 40px;
    color: white;
    text-align: center;
  }
</style>
