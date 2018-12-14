<template >
<div>
  <transition name="page" mode="out-in">
    <slot>
      <router-view/>
    </slot>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'Child',
  mounted() {
    window.onload = function(){
      console.log('loaded')
      document.body.classList.remove('preload')
    }
  }
}
</script>

<style>

.page-enter-active{
  transition: all 0.5s;
}
.page-enter{
  transform: translateX(calc(-100vw + ((100vw - 100%)/2)))
}
.page-enter-to{
  transform: translateX(0);
}

.page-leave-active {
  transition: all 0.5s;
}

.page-leave{
  /*  */
}
.page-leave-to {
    transform: translateX(calc(100% + ((100vw - 100%)/2)));
}


/* .page-enter-active,
.page-leave-active {
    transition: opacity .2s;
}

.page-enter,
.page-leave-to {
    opacity: 0;
} */

</style>

