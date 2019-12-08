import axios from 'axios'

//请求商品详细数据的axios请求
export function requestdetail(config){
  const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/v1',
    timeout:5000
  })

  return instance(config)
}

