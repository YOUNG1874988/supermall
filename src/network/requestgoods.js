import axios from 'axios'

//由于原视频教程api停用导致首页商品信息无法展示，
//故为商品另外配置api

export function requestgoods(config) {
    const instance = axios.create({
        // baseURL:'https://www.ifanv.com/api/test',这是阿龙给的他自己的api，只有商品img,title,price
        //后面老师给的新的api
        baseURL: 'http://123.207.32.32:8000/api/w1',
        timeout: 5000
    })
    return instance(config)
}