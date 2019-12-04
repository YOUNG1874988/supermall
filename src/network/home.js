//1.导入基本请求配置函数，基本配置中的url可以到达服务器地址，但是没有具体指明请求哪个数据
import {request} from './request'
import {requestgoods} from './requestgoods'
import {requestdetail} from './requestgoodsdetail'
//2.配置请求首页多个数据的函数
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
//3.配置请求首页商品信息的函数
export function getHomeGoods(type,page){
  return requestgoods({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}
//4.配置请求商品详情页数据的函数
export function  getGoodsDetail(iid) {
 return requestdetail({
   url:'/detail',
   params:{
     iid
   }
 })
}

//api变更后原商品请求废弃
/*export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}*/
