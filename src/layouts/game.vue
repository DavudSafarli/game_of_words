<template>
  <v-app>
    <!-- <div class="container mt-4"> -->
    <v-container class="game-container">
      <child/>
    </v-container>
    <!-- </div> -->
  </v-app>
</template>

<script>

export default {
  name: 'GameLayout',

}
</script>
<style>
@font-face {
  font-family: 'Hurme Light';
  src: url('../assets/HurmeGeometricSans1 Light.otf');
}
.game-container{
  max-width: unset!important; 
  padding: 0 0px!important;
  padding-top: 0px!important;
  font-family: 'Hurme Light'!important;
}
p{
  font-weight: normal!important;
}

</style>

