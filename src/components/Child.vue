<template>
  <transition name="page" mode="out-in">
    <slot>
      <router-view/>
    </slot>
  </transition>
</template>

<script>
export default {
  name: 'Child'
}
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: opacity .2s;
}

.page-enter,
.page-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .15s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>

