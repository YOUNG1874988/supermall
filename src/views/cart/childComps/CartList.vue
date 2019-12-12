<template>
    <div class="cartlist">
      <ul>
        <li
          class="cart-good"
          v-for="(item,index) in this.$store.state.cartList"
          :key="index"
          @click="goodClick(index)">

          <img src="~assets/img/common/cart/tick.svg"
               :class="{checked:item.checked}"
               alt="" class="checkout">
          <img :src="item.img" alt="" class="goodimg">
          <div class="text">
            <span class="title"> {{item.desc}} </span>
            <div class="price">{{item.price}}</div>
            <div class="count"><div class="multi-symbol">✖ </div>️{{item.count}}</div>
          </div>

        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "CartList",

      methods:{
          goodClick(index){
            console.log('are you checked??');
            //当点击某个产品时，对给产品的checked属性取反；
            //由于该产品的选中状态是由checked值决定的，故
            //可以通过点击来改变是否添加到选中状态
            this.$store.state.cartList[index].checked = ! this.$store.state.cartList[index].checked
          },
        itemClick(index){

        }
      }
    }
</script>

<style scoped>
.cart-good{
  height: 100px;
  padding:10px 10px 10px 10px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  display: flex;
}
.cart-good .checkout{
  width: 20px;
  height: 20px;
  float: left;
  margin-right: 10px;
  background-color: #ccc;
  border-radius: 5px;
  border: 2px solid rgba(0,0,0,.1);
  position: relative;
  top: 28px;
}
/*一个盒子同时拥有2个属性，并且这2个属性都为真时，这2个属性会同时有效，
如果这2个属性存在冲突时，同样的独特性下优先选择靠后的*/
.cart-good .checked{
  background-color: red;
}
  .cart-good .goodimg{
    width: 80px;
    height: 80px;
    border-radius: 10px;
    float: left;
    margin-right: 20px;
  }
  .cart-good text{
    float: right;
    margin-left: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    overflow:hidden;
  }
  .title{
    height: 30px;
    width: 180px;
    display: inline-block;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 18px;
  }
  .price{
    height: 30px;
    position:relative;
    top: 30px;
    color: #E6845D;
  }
  .count{
    position: absolute;
    right: 20px;
    height: 30px;
  }
  .multi-symbol{
    position: absolute;
    right: 15px;
  }
</style>
