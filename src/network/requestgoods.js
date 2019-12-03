import axios from 'axios'

//由于原视频教程api停用导致首页商品信息无法展示，
//故为商品另外配置api

export function requestgoods(config){
  const instance = axios.create({
    baseURL:'https://www.ifanv.com/api/test',
    timeout:5000
  })
  return instance(config)
}
