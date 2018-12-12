<template>
    <v-dialog :value="game_state == 'paused'" persistent max-width="450">
        <v-card>
            <v-card-title class="headline justify-center">Paused</v-card-title>
            
            <v-card-actions>
               <v-btn light active-class="home-link v-btn--active" :to="{name: 'home'}">
                    <v-icon color="black">arrow_back</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn  light @click="resume">
                    <v-icon color="black">play_arrow</v-icon>
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
            
        ]),
        resume() {
            this.set_game_state(true)
            this.set_time()
        }
    }
}
</script>

<style>

</style>
