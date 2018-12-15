<template>
  <v-app class="game-color">
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
.game-container p{
  font-weight: 600!important;
  color: white;
}
p{
  font-weight: normal!important;
}
.game-color .application--wrap{
  /* background: radial-gradient(circle at 50% 50% , #fff 0%, rgb(99, 172, 192) 80%); */
  background: #303952;
  /*
  #596275;
  #576574
  */
}
</style>

