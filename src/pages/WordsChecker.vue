<template lang="pug">
div
    .columns
      .column.is-one-third
        img(src='../assets/game1.png', alt='')
      .column.is-one-third
        |Match the words with their closest synonyms.
        |You have 30 seconds total.
        |Other features will be added in the near future!
        
        p The Game is fun and full of errors...
    
    .columns
      .column.is-full
        v-btn(:to="{name:'home'}") Play

    v-btn(:to="{name:'home'}") Back
</template>

<script>
export default {

}
</script>

<style>
.columns{
  align-items: center;
  justify-content: center;
}
.column{
  text-align: center;
}

</style>
