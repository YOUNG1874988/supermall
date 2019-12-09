<template>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avater" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
<!--          这里为该评论产生的时间，为时间戳格式，需要用过滤器转换为Date格式-->
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
        </div>
      </div>
    </div>
</template>

<script>
// <!--  导入时间日期转换函数  -->
    import {formatDate} from '@/common/utils'
    export default {
        name: "DetailCommentInfo",
      props:{
          commentInfo:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      filters:{
          showDate: function (value){
            let date = new Date(value * 1000)
            return formatDate(date,'yyyy-MM-dd')
          }
      }
    }
</script>

<style scoped>
  .comment-info{
    padding: 10px 12px;
  }
.info-header{
  height: 55px;
  /*让该盒子内的文字垂直居中*/
  line-height: 55px;
}
/*对同一个盒子内的2个元素都使用浮动属性，可以使它们处在同一水平高度上*/
.header-title{
  float: left;
}
.header-more{
  float: right ;
}
.info-user{
  border-top: 1px solid rgba(0,0,0,.1);
  padding: 10px 0 10px;
}
.info-user img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span{
  /*使用相对定位改变位置*/
  position:relative;
  top: -15px;
  margin-left:10px;
}
.info-detail{
  padding:0 5px 15px;
}
.info-detail p{
  font-size: 14px;
  color: #999;
  line-height: 1.5;
}
.info-detail .info-other{
  font-size: 12px;
  color: #999;
  margin-top:10px;
}
  .info-other .date {
    margin-right: 8px;
  }

  .info-imgs {
    margin-top: 10px;
  }
.info-imgs img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}

</style>
