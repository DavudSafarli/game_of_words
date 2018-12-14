<template>
<div :class="{'columns is-mobile w100':true,  'overlay': (game_state == 'paused' || game_state == 'loading')}">
    <div :class="{'column is-two-fifths-fullhd is-two-fifths-widescreen is-three-fifths-desktop is-three-fifths-tablet is-four-fifths-mobile wrapper':true}">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="blur-svg"><defs><filter id="blur-filter"><feGaussianBlur stdDeviation="3"></feGaussianBlur></filter></defs></svg>
        <timeout></timeout>
        <word-card></word-card>
        <start-button></start-button>
    </div>
    <!-- <div id="gameP"></div> -->
    <pause-window></pause-window>
    
    <try-again></try-again>
    <bottom-buttons class="mb-0"></bottom-buttons>
</div>
</template>

<script>
var x;
import config from '../config/game.config.js'
import {mapGetters, mapMutations} from 'vuex'
export default {
    
    layout: 'game',
    data() {
        return {
        }
    },
    mounted() {
        let vueThis = this;

    },
    computed: {
        ...mapGetters([
            'game_words',
            'game_ready_state',
            'game_state',
        ])
    },
    methods: {
        ...mapMutations([
            'set_game_state',
        ])
    },
    beforeDestroy() {
        console.log('before destroyyy')
        this.set_game_state(false)
    }
}
</script>

<style>
#gameP{
    position: absolute;
    /* background-color: #eee; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

}


#game {
    padding: 30px 0;
}



.blur-svg {
    display: none;
}

.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
    -webkit-filter: url(#blur-filter);
    filter: url(#blur-filter);
    -webkit-filter: blur(3px);
    filter: blur(3px);
}

.w100 {
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto !important;
}

.wrapper {
    height: 100%;
    padding: 0px 10px !important;
    height: 100%;
    align-self: flex-start;
}


@media screen and (max-width: 555px) {
    .wrapper {
        width: 95% !important;
    }
}

.columns {
    flex-wrap: wrap;
}

@media screen and (max-width: 525px) {
    .column {
        padding: 0.5rem !important;
    }
}

main.v-content {
    padding: 0 !important;
}

.h100 {
    height: 100%;
}

html,
body,
.v-content__wrap {
    height: 100%;
}
</style>
