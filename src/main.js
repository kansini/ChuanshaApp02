
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import customList from '@/components/customList'
import axios from 'axios'

axios.defaults.baseURL = './api'
Vue.prototype.$axios = axios;

Vue.use(customList)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
