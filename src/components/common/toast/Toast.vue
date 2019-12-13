<template>
    <div class="toast" v-show="isShow">
{{message}}

    </div>
</template>

<script>
    export default {
        name: "Toast",
      // props:{
      //     message:{
      //       type:String,
      //       default:'hello tokyo'
      //     }
      // }
        data(){
          return{
            message:'',
            isShow:false
          }
        },
      methods:{
          show(message='默认文字',duration=2000){
            //在2000毫秒时间段内展示需要展示的文字信息；
            //过了2000毫秒则不展示
            this.isShow = true;
            this.message = message
            setTimeout(() => {
              this.isShow = false;
              this.message = ''
            },duration)
          }
      }
    }
</script>

<style scoped>
.toast{
  background-color: red;
  position: fixed;
  left:50%;
  top: 50%;
  /*使用该属性时可以让该盒子在视口水平和垂直位置居中*/
  transform: translate(-50%,-50%);
  color: white;
}

</style>
