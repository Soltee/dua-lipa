import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Axios from 'axios'

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(VueRouter);

var router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

