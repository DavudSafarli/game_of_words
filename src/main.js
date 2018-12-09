import Vue from 'vue'
import App from './components/App.vue'
import './components'
import './plugins'
import router from './router/'
import store from './store'
import 'bulma/css/bulma.min.css'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  ...App
})
