import Vue from 'vue'
import Vuex from 'vuex'
import {store} from "./store.js";
Vue.use(Vuex)

// Load store modules dynamically.
// const requireContext = require.context('./modules', false, /.*\.js$/)


// const modules = requireContext.keys()
//   .map(file => {
//       return [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
//     }
//   )
//   .reduce((modules, [name, module]) => {
//     if (module.namespaced === undefined) {
//       module.namespaced = true
//     }
//     return { ...modules, [name]: module }
//   }, {})

// export default new Vuex.Store({
//   modules
// })

export default store