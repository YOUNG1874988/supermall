import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },

    mutations: {
        addCart(state, payload) {
            console.log('hello tokyo');
            // 1.查看是否添加过该商品,如果cartList中有元素的iid和负载的iid相等，则购物车中已经有该产品
            const oldInfo = state.cartList.find(item => item.iid === payload.iid)
                //2. 如果购物车中存在该产品，给其数量加1
            if (oldInfo) {
                oldInfo.count += 1
            }
            //3.如果购物车中不存在该产品，给其数量加1，并推入到cartList数组中
            else {

                payload.count = 1
                payload.checked = true
                state.cartList.push(payload)
            }

        }
    }
})

export default store