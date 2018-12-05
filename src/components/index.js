import Vue from 'vue'
import Child from './Child'
import Navbar from './Navbar'

[
    Child,
    Navbar
  ].forEach(Component => {
    Vue.component(Component.name, Component)
  })