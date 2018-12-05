import Vue from 'vue'
import App from './components/App.vue'
import './components'
import router from './router/'
Vue.config.productionTip = false

new Vue({
  router,
  ...App
})
