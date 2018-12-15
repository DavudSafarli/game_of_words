<template>
<div v-if="game_state == true || game_state == 'paused'" class="columns is-mobile fixed">
        <div class="column">
            <v-btn  active-class="home-link v-btn--active" :to="{name: 'home'}">
                <v-icon>arrow_back</v-icon>
            </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div class="column">
            <v-btn color="grey lighten-4" @click="pause">
                <v-icon>pause</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'BottomButtons',
    computed: {
        ...mapGetters([
            'game_state'
        ]),
    },
    methods: {
        ...mapMutations([
            'set_game_state',
            'set_offset',
            'set_time'
        ]),
        pause() {
            console.log('paused')
            this.set_game_state('paused')
            this.set_offset()
        }
    }
}
</script>

<style>
.fixed {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0!important;
}

</style>
