import $ from './assets/js/jquery-1.11.1.min'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

router.beforeEach((to, from, next) => {
  console.log(to)
});

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

