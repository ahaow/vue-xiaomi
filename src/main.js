import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAaxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import VueCookie from 'vue-cookie'
import store from './store'
// import env from './env'

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data
    let path = location.hash
    if(res.status === 0) {
      return res.data
    } else if (res.status === 10) {
      if(path != '#/index') {
        window.location.herf = '/#/login'
      }
    } else {
      alert(res.msg)
    }
})

Vue.use(VueAaxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
