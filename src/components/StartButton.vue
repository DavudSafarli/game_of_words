<template>
<div v-if="game_state == 'preview'" class="game_info">
    <div class="game_preview columns">

        <div class="pic_preview none">
            <p>This is Word itself</p>
        </div>
        <div class="pic_preview none">
            <p>This is Definition</p>
        </div>
    </div>
    <div id="start_button" @click="start_game">
        <v-btn>Start</v-btn>
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
    },
    beforeMount() {
        this.set_game_state('preview')
        
    },
    beforeDestroy() {
        console.log('before destroy')
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
                        arr[0].classList.remove('none', 'found')
                        arr[1].classList.remove('none', 'found')
                    
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
                    arr[0].classList.add('found')
                    arr[1].classList.remove('selected')
                    arr[1].classList.add('found')
                    return res()
                }, 300);
            })
        }
        function none() {
            return new Promise(res => {
                setTimeout(() => {
                    arr[0].classList.add('none')
                    arr[1].classList.add('none')
                    return res();
                }, 700);
            })
        }
    },
    
}
</script>

<style>
.none {
    display: none !important;
}

.game_preview {
    width: 50%;
    height: 50%;
    margin: 0 auto !important;
}

.pic_preview {
    margin: 25px;
    display: flex;
    align-items: center;
    word-break: break-word;
    white-space: pre-line;
    justify-content: center;
    background: linear-gradient(37deg, rgba(6, 108, 143, 0.5) -20%, rgba(6, 108, 143, 1) 60%);
    width: 120px;
    height: 120px;
}

.game_info {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

#start_button {}
</style>
