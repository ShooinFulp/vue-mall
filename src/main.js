import Vue from 'vue'
import App from './App.vue'
import Toast from './components/common/toast/index';

import router from 'router';
import store from 'store';

import { startEvent } from 'common/mixin';

Vue.use(Toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store,
  mixins: [startEvent]
}).$mount('#app')
