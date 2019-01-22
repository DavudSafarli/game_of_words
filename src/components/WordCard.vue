<template>
<div  v-if="game_state == true || game_state == 'paused' || game_state == 'finished'" class="columns is-mobile justify-center" id="game">
    <div  class="column is-one-third" v-for="(item, index) in game_words" :key="index">
        <div class="rel">
            <div @click="clickHandler" :data-id="index + 1" v-html="item.key" class="pic" ref='pic'>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
    name: 'WordCard',
    data() {
        return {
            selected: [],
        }
    },
     computed: {
        ...mapGetters([
            'game_words',
            'game_state'
        ])
    },
    methods: {
        async clickHandler(e) {
            let cube = e.currentTarget //to delete elements
            let data_id = cube.getAttribute('data-id') - 1 //index of word array
            let pair_id = this.game_words[data_id].p_id //to check if word==definition

            let s = this.selected
            if (s.length == 0) {
                s.push({
                    data_id,
                    pair_id,
                    cube
                })
                cube.classList.add('selected')
            } else if (s.length == 1) {
                if (s[0].data_id == data_id) {
                    s[0].cube.classList.remove('selected')
                    this.selected = []
                    return
                }
                s.push({
                    data_id,
                    pair_id,
                    cube
                })
                cube.classList.add('selected')
            }
            s = this.selected
            if (s.length == 2) {
                
                if (s[0].pair_id == s[1].pair_id) {
                    s[0].cube.classList.add('found')
                    s[1].cube.classList.add('found')

                    setTimeout(async() => {
                        s[0].cube.parentElement.style.visibility = 'hidden'
                        s[1].cube.parentElement.style.visibility = 'hidden'
                        let gamefinished = await this.$store.dispatch('add_found_pair', s[0].pair_id)
                    }, 200);
                }else{
                    setTimeout(() => {
                        s[0].cube.classList.remove('selected')
                        s[1].cube.classList.remove('selected')
                        s[0].cube.classList.add('wrong')
                        s[1].cube.classList.add('wrong')
                        setTimeout(() => {
                            s[0].cube.classList.remove('wrong')
                            s[1].cube.classList.remove('wrong')
                        }, 300);
                    }, 100);
                }
                    this.selected = [];

            }

        },
        resizeHandler() {
            let el = document.querySelector('.pic')
            if(!el)
                return
            let root = document.querySelector('#game')
            root.style.setProperty('--width', el.offsetWidth + 'px')
        },
        debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            }
        }
    },
    mounted() {
        let vue = this
        window.addEventListener('gamestart', ()=>{
            vue.selected = [];
        })
        window.addEventListener('resize', this.debounce(this.resizeHandler, 50, false))
        this.resizeHandler()
    },
    updated() {
        if(this.game_state == true)
            this.resizeHandler()
    },
}
</script>
<style>
.wrong{
    background-color: rgb(255, 17, 57)!important;
    animation: neon 1.5s ease-in-out infinite alternate;;
    --color: #FF1177;
}
@-webkit-keyframes neon {
  from {
    box-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px var(--color), 0 0 15px var(--color), 0 0 20px var(--color), 0 0 25px var(--color), 0 0 30px var(--color);
  }
  to {
    box-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 7px #fff, 0 0 10px var(--color), 0 0 10px var(--color), 0 0 10px var(--color), 0 0 15px var(--color), 0 0 20px var(--color);
  }
}

.selected {
    /* background: linear-gradient( 37deg, rgba(6, 108, 143, 0.5) -20%, rgba(6, 143, 17, 0.473) 60%)!important; */
    background: #45aaf2!important;
    position: relative;
    position: relative;
    border-radius: 8%;
    animation: neon 1.5s ease-in-out infinite alternate;
    --color: #228DFF;
}

.found{
    border-radius: 8%;
    transform: scale(1.2);
    --color: #66ff00;
    animation: neon 1.5s ease-in-out infinite alternate!important;
    background: #09ff00!important;
}

.pic{
    transition: 0.1s;
    user-select: none;
    cursor: pointer;
    border-radius: 8%;
    /* background: linear-gradient( 37deg, rgba(6, 108, 143, 0.5) -20%, rgba(6, 108, 143,1) 60%); */
    background: #747d8c;
    width: 100%;
    height: var(--width);
    font-size: calc(0.7rem + 0.6vw);
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
    white-space: pre-line;
}

#game{
    --width: 120px;
}
.abs {
    top: 0;
    bottom: 0%;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;
    position: absolute;
    font-size: calc(0.7rem + 0.6vw);
    border-radius: 10px;
    cursor: pointer;
    margin: 1%;
    padding: 0 1px;
}


.rel {
    position: relative;
}

.rel div {
}

</style>


