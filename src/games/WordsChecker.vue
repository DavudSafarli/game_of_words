<template>
<div :class="{'columns is-mobile w100':true, }">
    <div :class="{'column is-two-fifths-fullhd is-two-fifths-widescreen is-three-fifths-desktop is-half-tablet is-four-fifths-mobile wrapper':true, 'overlay': (game_state == false || game_state == 'loading')}">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="blur-svg"><defs><filter id="blur-filter"><feGaussianBlur stdDeviation="3"></feGaussianBlur></filter></defs></svg>
        <timeout></timeout>
        <word-card></word-card>
    </div>
    <pause-window></pause-window>
    <start-button></start-button>
    <try-again></try-again>
    <bottom-buttons></bottom-buttons>
</div>
</template>

<script>
var x;
import config from '../config/game.config.js'
import {mapGetters} from 'vuex'
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
    
      wac() {
        return this.$store.state.game_state
      },

  watch: {
    wat() {
      console.log(this.wac())
    }
  }
}
</script>

<style>



#game {
    padding: 30px 0;
}



.blur-svg {
    display: none;
}

.overlay {
    position: absolute;
    left: 0;
    top: 0;
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
    position: relative;
}

.selected {
    border: 1px solid red;
}

@media screen and (max-width: 768px) {
    .wrapper {
        width: 95% !important;
    }
}

.abs {
    top: 0;
    bottom: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    position: absolute;
    font-size: calc(0.7rem + 0.6vw);
}

.abs {
    border-radius: 17%;
    cursor: pointer;
}

.columns {
    flex-wrap: wrap;
}

.rel {
    position: relative;
}

.rel div {
    margin: 0 7% 3% 1%;
    padding: 0 1px;
    word-wrap: break-word;
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
