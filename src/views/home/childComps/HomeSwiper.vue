<template>
  <swiper>
    <swiper-item v-for="item in banners" v-bind:key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoaded">
      </a>
    </swiper-item>

  </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper/index'

    export default {
        name: "HomeSwiper",
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
          return{
           isLoad:false
          }
            
        },
        components:{
            Swiper,
            SwiperItem
        },
        methods:{
          imgLoaded(){

            if(!this.isLoad){
            console.log('imges have been loaded!!')
            this.$emit('imgLoaded')
            this.isLoad = true
            }
          
          }
        }
    }
</script>

<style scoped>

</style>
