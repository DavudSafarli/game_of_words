<template>
  <v-app>
    <navbar/>
    <div class="mt-5">
    <v-container class="default-container">
      <child/>
    </v-container>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',

}
</script>
<style>
.default-container{
  position: unset!important;
}
@media screen and (min-width: 1600px){
  .default-container {
      max-width: 1600px!important;
      width: 1600px!important;
  }
}
</style>

