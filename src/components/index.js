import Vue from 'vue'
import Child from './Child'

[
    Child,  
  ].forEach(Component => {
    Vue.component(Component.name, Component)
  })