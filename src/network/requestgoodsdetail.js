import axios from 'axios'

//请求商品详细数据的axios请求
export function requestdetail(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/w1',
        timeout: 5000
    })

    return instance(config)
}