import Vue from 'vue'
import Child from './Child'
import Navbar from './Navbar'
import Startbutton from './StartButton'
import ButtomButtons from './ButtomButtons'
import TryAgain from './TryAgain'
import Timeout from './Timeout'
import WordCard from './WordCard'

[
  WordCard,
  Timeout,
  TryAgain,
  ButtomButtons,
  Startbutton,
  Child,
  Navbar
].forEach(Component => {
  Vue.component(Component.name, Component)
  console.log(Component.name)
})