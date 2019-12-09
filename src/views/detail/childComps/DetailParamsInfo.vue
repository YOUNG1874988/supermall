<template>
<!--  判断该对象有值才渲染该组件，否则不渲染-->
    <div class="params-info" v-if="Object.keys(itemParams).length !== 0">
<!--      商品尺寸列表展示-->
        <table
          v-for="(table,index) in itemParams.rule.tables"
          :key="index"
          class="info-size"
        >
          <tr
            v-for="(tr,index) in table"
            :key="index"
          >
            <td v-for="(td,index) in tr"
            :key="index"
            >
              {{td}}
            </td>
          </tr>
        </table>
      <table class="info-param">
        <tr
          v-for="(tr,index) in itemParams.info.set"
          :key="index"
        >
          <td class="info-param-key">
            {{tr.key}}
          </td>
          <td class="param-value">
            {{tr.value}}
          </td>
        </tr>
      </table>

    </div>
</template>

<script>
    export default {
      name: "DetailParamsInfo",
      props:{
          itemParams:{
            type:Object,
            default(){
              return {}
            }
          }
      }
    }
</script>

<style scoped>
  .params-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
.params-info table{
  width: 100%;
  /*该属性决定表格边框不是空的，而是实线*/
  border-collapse:collapse;
}
  .params-info table tr{
    height: 42px;
  }
  .params-info table tr td{
    border-bottom:1px solid rgba(100,100,100,.1);
  }
  .info-param-key{
    /*当value过多的时候回挤到key，所以给key一个固定宽度*/
    width: 95px;
  }
.info-param{
  border-top: 1px solid rgba(0,0,0,.1);
}
  .param-value{
    color: #eb4868;
  }

</style>
