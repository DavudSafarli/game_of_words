<template>
<div>
    <component v-if="layout" :is="layout" />
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
      console.log(layouts)
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }
      this.layout = layouts[layout]
    },
  }
}
</script>

<style>
</style>
