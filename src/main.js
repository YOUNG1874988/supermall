import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
import store from 'store/index'
import toast from 'components/common/toast'
// import VueScroller from 'vue-scroller'
Vue.config.productionTip = false


//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast 插件
Vue.use(toast)


Vue.use(ElementUI)
    // Vue.use(VueScroller)
Vue.use(Mint)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
