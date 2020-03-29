import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        carts: []
    },
    mutations: {
        addToCart(state, payload) {
            state.carts.push(payload);
        },
        addCounter(state, payload) {
             state.carts.find((value) => {
                return value.params.goods_id == payload.params.goods_id
            })
        }
    },
    actions: {
        addToCart(context,payload){
            this.commit('addToCart',payload)
        }
    },
    getters: {

    }, modules: {

    }
})

export default store