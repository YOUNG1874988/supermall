import Vue from 'vue'
import VueRouter from 'vue-router'
//1.安装插件
Vue.use(VueRouter)
    //2.创建router

// 将各个页面的组件以懒加载的方式导入到router文件夹下的index.js中，懒加载：要用到时才请求数据，提高用户体验
const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const Detail = () =>
    import ('../views/detail/Detail.vue')
    //为各个路由配置路径和目标组件
    const routes = [{
            path: '/home',
            component: Home
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/profile',
            component: Profile
        },
      {
        path:'/detail/',
        component:Detail
      }
    ]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出router
export default router
