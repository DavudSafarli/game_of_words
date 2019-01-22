<template>
<div v-if="game_state == 'level'" class="game-level columns is-mobile justify-center align-center">
    <div class="column is-half level-glow">
        <div class="flex-column justify-center align-center columns level">
            <h1  class="column is-full level-header">Choose level</h1>
            <div class="column is-full button-glow easy" @click="start_game('easy')">Easy</div>
            <div class="column is-full button-glow hard" @click="start_game('hard')">Hard</div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters,mapMutations
} from 'vuex';

export default {
    name: 'Level',
    computed: {
        ...mapGetters([
            'user_state',
            'game_state'
        ])
    },
    methods: {
        
        ...mapMutations([
            'set_game_state',
            'set_time',
            'set_difficulty'
        ]),
        start_game(e) {
            this.set_difficulty(e)
            this.set_game_state('loading')
            this.set_time((new Date()).getTime())
            this.$store.dispatch('hacume')
        }
    }
}
</script>

<style>
.level-header{
    font-size: calc(7vmin + 0.5vmax);
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
        0 0 2px #11f7ff, 0 0 3px #11f7ff, 0 0 5px #11f7ff,
        0 0 2px #11f7ff, 0 0 3px #11f7ff;
}
.flex-column{
    flex-direction: column;
}
.button-glow{
    transition: 0.5s;
    display: block;
    line-height: 1;
    cursor: pointer;
    padding: 10px 0!important;
    margin: 8px 0;
    font-size: calc(4.5vmin + 5px);
    --glow: green;
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 5px #fff,
        0 0 10px var(--glow), 0 0 15px var(--glow), 0 0 20px var(--glow),
        0 0 10px var(--glow), 0 0 15px var(--glow);
}
.easy{
    --glow: green;
}.easy:hover{
    --glow: rgb(103, 236, 103);
}
.med{
    cursor: not-allowed;
    text-shadow: none;
    --glow: rgb(211, 211, 0);
}.med:hover{
    --glow: rgb(248, 248, 135);
}
.hard{
    --glow: rgb(218, 0, 0);
}.hard:hover{
    --glow: rgb(255, 104, 104);
}

.game-level {
    text-align: center;
    margin: 0!important;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30%;
    top: 0;
}

.level-glow {
    display: flex!;
    width: 50%;
    border-radius: 4px;
    box-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 5px #fff,
        0 0 10px #11f7ff, 0 0 15px #11f7ff, 0 0 20px #11f7ff,
        0 0 10px #11f7ff, 0 0 15px #11f7ff;
}
</style>
