<template>
<div v-if="game_state == 'preview'" class="game_info">
    <div class="game_preview columns is-mobile justify-center align-center">

        <div class="column pic_preview none">
            <p>Select Word</p>
        </div>
        <div class="column pic_preview none">
            <p>Select Definition</p>
        </div>
    </div>
    <div id="start_button" class="justify-center align-top">
        <v-btn @click="start_game">Select Level</v-btn>
    </div>
</div>
</template>

<script>
import config from '../config/game.config.js'
import {
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    name: 'StartButton',
    data() {
        return {
            destroyed: false,
        }
    },
    computed: {
        ...mapGetters([
            'game_state'
        ]),

    },
    methods: {
        ...mapMutations([
            'set_game_state',
            'set_time'
        ]),
        start_game() {
            this.set_game_state('level')
            // this.set_game_state('loading')
            // this.set_time((new Date()).getTime())
            // this.$store.dispatch('hacume')
        },
    },
    beforeMount() {
        this.set_game_state('preview')
        
    },
    beforeDestroy() {
    },
    async mounted() {
        let arr = document.querySelectorAll('.pic_preview')
        let l = arr.length
        let vue = this
        animation()
    
        async function animation() {
            if(vue.game_state != 'preview'){
                return
            }

            await show()
            await select()
            await found()
            await none()
            animation();
        }
        function show() {
            return new Promise(res => {
                setTimeout(() => {
                        arr[0].classList.remove('none', 'found', 'selected')
                        arr[1].classList.remove('none', 'found', 'selected')
                    
                    return res()
                }, 300);
            })
        }
        function select() {
            return new Promise(res => {
                setTimeout(() => {
                    arr[0].classList.add('selected')
                    setTimeout(() => {
                        arr[1].classList.add('selected')
                        return res()
                    }, 600)
                }, 800);
            })
        }
        function found() {
            return new Promise(res => {
                setTimeout(() => {
                    arr[0].classList.remove('selected')
                    arr[1].classList.remove('selected')
                    arr[0].classList.add('found')
                    arr[1].classList.add('found')
                    return res()
                }, 100);
            })
        }
        function none() {
            return new Promise(res => {
                setTimeout(() => {
                    arr[0].classList.add('none')
                    arr[1].classList.add('none')
                    return res();
                }, 600);
            })
        }
    },
    
}
</script>

<style>

#start_button {
    display: flex;
}
.none {
    display: none !important;
}

.game_preview {
    /* width: 50%; */
    height: 50%;
    margin: 0 auto !important;
}

.pic_preview {
    align-self: center;
    border-radius: 8%;
    margin: 25px;
    display: flex!important;
    align-items: center;
    word-break: break-word;
    white-space: pre-line;
    justify-content: center;
    background: #747d8c;
    max-width: 120px;
    height: 120px;
}

.game_info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

</style>
