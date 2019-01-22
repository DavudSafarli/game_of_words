<template>
    <v-dialog :value="game_state == 'paused'" persistent max-width="450">
        <v-card>
            <v-card-title class="headline justify-center">Paused</v-card-title>
            
            <v-card-actions>
               <v-btn light active-class="home-link v-btn--active"
               @click="$store.dispatch('goHome')">
                    <v-icon color="black">arrow_back</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn light @click="$store.dispatch('chooseLevel')">
                    <v-icon color="black">refresh</v-icon>
                </v-btn>
                <v-btn light @click="resume">
                    <v-icon color="black"  class="play">play_arrow</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'PauseWindow',
    computed: {
        ...mapGetters([
            'game_state'
        ]),
    },
    methods: {
        ...mapMutations([
            'set_game_state',
            'set_time',
            'reset_game'
        ]),
        restart() {
            this.set_game_state('level')
            this.reset_game()
        },
        resume() {
            this.set_game_state(true)
            this.set_time()
        }
    }
}
</script>

<style>
/* .play{
    animation: play 2s steps(4, end) infinite;
}
@keyframes play{
    from{
        transform: translateX(-10px);
    }to{
        transform: translateX(10px);
    }
} */
</style>
