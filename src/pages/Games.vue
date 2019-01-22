<template lang="pug">
  v-container
    .columns.level-left
      .column.is-one-third
        .columns.is-vertical.has-text-justified.pa-4
          img(src="../assets/game1.png")
          div Match the words with their closest synonyms. 
          |You have 30 seconds total. Other features will be added in the near future!
          |The Game is fun and full of errors...
        .columns
           v-btn(:to="{name:'home'}") Play
      //- .column.is-one-third
      //-   .columns.is-vertical.has-text-justified.pa-4
      //-     img(src="../assets/game1.png")
      //-     div Match the words with their closest synonyms. 
      //-     |You have 30 seconds total. Other features will be added in the near future!
      //-     |The Game is fun and full of errors...
      
</template>
<style>
</style>
