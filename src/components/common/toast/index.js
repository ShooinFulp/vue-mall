import Toast from './Toast.vue';
export default {
    install(Vue) {

        console.log('install ing');


        const constructor = Vue.extend(Toast);

        const toast = new constructor();

        toast.$mount(document.createElement('div'));

        document.body.appendChild(toast.$el);

        Vue.prototype.$toast = toast
    }
}