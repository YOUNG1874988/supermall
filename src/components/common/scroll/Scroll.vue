<template>
<!--   当该组件被引用后，下面的wrapper标签就相当于scroll标签，所以当scroll组件被调用后会给scroll标签设置高度，以实现滚动-->
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        data(){
            return{
                scroll:{}
            }
        },
        props:{
            //在这里设置默认滚动监听类型，其他组件调用滚动时绑定该props，可以做到各个组件拥有的不同滚动类型
            probeType:{
                type:Number,
                default:3
            }

        },

        mounted() {
            //1.创建scroll对象
            this.scroll = new BScroll(this.$refs.wrapper,{
                //必须给scroll实例设置该属性，其作用域内 div和span才是可被点击的，否则无法点击！！
                click:true,
                //probeType的值决定监听滚动的类型：
                //0，1：从不监听；
                //2：只监听人类手指触摸的滚动，手指离开后的惯性滚动不监听；
                //3：监听所有滚动
                probeType:this.probeType,
            })
            //2.监听滚动的位置
            // 由于使用该方法监听滚动位置无效，故无用
            // console.log(this.scroll)
            this.scroll.on('scroll',(position) => {
              console.log('监听正在进行！！')
                // console.log(this.scroll);
              // this.$emit('scroll',position)
            })
            // 3.监听上拉事件,没有效果
            // this.scroll.on('pullingUp',() => {
            //   // console.log('上拉加载更多')
            //   this.$emit('pullUp')
            // })
        },
        methods: {
            //返回到指定的scroll位置
            // 由于使用better-scroll该方法无效，故废弃改用element-ui中的backtop进行顶部返回
            // scrollTo(x,y){
            //      this.scroll.scrollTo(x,y)
            //       console.log('返回顶部点击成功！！！！')
            // }
        }
    }
</script>

<style scoped>

</style>
