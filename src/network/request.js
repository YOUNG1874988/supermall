import axios from 'axios'
//*****不使用promise 函数需要传递3个参数
/*export function request(config,success,failure) {
//    1.创建AXIOS实例
    const instance = axios.create({
        baseURL:'http://123.207.33.33:8000',
        timeout:5000
    })



    //3.发送真正的网络请求
    instance(config)
        .then(res => {
            success(res)
        })
        .catch(err => {
            failure(err)
        })
}
*/
//创建商品详情页推荐数据请求并导出
export function requestRecommend(config) {
    const instance = axios.create({
        // baseURL: 'http://106.54.54.237:8000/api/w1',
        baseURL: 'http://123.207.32.32:8000/api/w1',
        timeout: 5000
    })
    return instance(config)
}

//*****使用PROMISE函数可以无需添加success和failure参数，会简洁很多
//该request请求只请求到首页除了goods信息之外的内容
export function request(config) {
    //    1.创建AXIOS实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/w1',
        timeout: 5000,
    })

    //2.axios拦截器的使用
    //2.1请求拦截
    /*
        使用场景：(1).比如config中的一些信息不符合服务器的要求；
                 (2).比如每次发送网络请求时，都希望在界面中显示一个请求的图标；
                 (3).某些网络请求(比如登录(token)),必须携带一些特殊信息
    */
    instance.interceptors.request.use(config => {
            return config;
        }, err => {
            console.log(err);
        })
        //2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    //3.发送真正的网络请求
    // 这里的axios instance实例其实也是一个promise函数，所以在这里无需用then和catch处理请求结果，在使用时进行处理即可
    return instance(config)
}