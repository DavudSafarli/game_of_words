<template>
<div v-if="button_state" id="start_button" @click="start_game">
    <v-btn>Start</v-btn>
</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'StartButton',
    computed: {
        ...mapGetters([
            'button_state'
        ]),
        
    },
    methods: {
        ...mapMutations([
            'buttonState'
        ]),
        start_game() {
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
