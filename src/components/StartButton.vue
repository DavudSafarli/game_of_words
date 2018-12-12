<template>
<div v-if="game_state == false" id="start_button" @click="start_game">
    <v-btn>Start</v-btn>
</div>
</template>

<script>
import config from '../config/game.config.js'
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'StartButton',
    computed: {
        ...mapGetters([
            'button_state',
            'game_state'
        ]),
        
    },
    methods: {
        ...mapMutations([
            'buttonState',
            'set_game_state',
            'set_time'
        ]),
        start_game() {
            this.set_game_state('loading')
            this.set_time((new Date()).getTime())
            this.buttonState(false)
            this.$store.dispatch('hacume')
            window.addEventListener('end', () => this.$store.dispatch('finish'));
        },
    }
}
</script>

<style>
#start_button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
