<template>
<div>
  <transition name="page" mode="out-in">
    <component v-if="layout" :is="layout" />
  </transition>
</div>
</template>

<script>
// Load layout components dynamically.
const requireContext = require.context('../layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})


export default {
    el:'#app',
    data: () => ({
        layout: null,
        defaultLayout: 'default'
    }),
    methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }
      this.layout = layouts[layout]
    },
  },
}
</script>

<style>
.home-link::before{
  background-color: unset!important;
}
body{
  background-color: #fafafa;
}
.preload, .preload * {
    -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
}
</style>
