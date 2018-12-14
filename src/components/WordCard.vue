<template>
<div  v-if="game_state == true || game_state == 'paused'" class="columns is-mobile" id="game">
    <div  class="column is-one-third" v-for="(item, index) in game_words" :key="index">
        <div class="rel">
            <!-- <svg viewBox="0 0 308.4 308.4">
                <defs>
                    <linearGradient :id="'linear-gradient' + index" x1="10" y1="142.86" x2="-275.71" y2="142.86" gradientTransform="matrix(-1, 0, 0, 1, 10, 0)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#d1d3d4" />
                    </linearGradient>
                    <linearGradient :id="'linear-gradient-2' + index" x1="7.71" y1="142.86" x2="-273.43" y2="142.86" gradientTransform="matrix(-1, 0, 0, 1, 10, 0)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" :stop-color="item.arr[0]" />
                        <stop offset="1" :stop-color="item.arr[1]" />
                    </linearGradient>
                </defs>
                <title>Asset 2</title>
                <g style="isolation: isolate;" class="cls-1">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="rectangle">
                            <g class="cls-2">
                                <rect style="fill: #fff;opacity: 0;"  x="23.03" y="23.04" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #fdfdfd;opacity: 0.02;"  x="22.58" y="22.59" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #fafafa;opacity: 0.04;"  x="22.13" y="22.15" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #f8f8f8;opacity: 0.06;"  x="21.68" y="21.7" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #f5f5f5;opacity: 0.08;"  x="21.24" y="21.25" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #f3f3f3;opacity: 0.1;"  x="20.79" y="20.8" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #f0f0f1;opacity: 0.12;"  x="20.34" y="20.35" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #eee;opacity: 0.14;"  x="19.89" y="19.91" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #ebebec;opacity: 0.16;"  x="19.44" y="19.46" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #e9e9e9;opacity: 0.18;"  x="18.99" y="19.01" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #e6e6e7;opacity: 0.2;"  x="18.55" y="18.56" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #e4e4e5;opacity: 0.22;"  x="18.1" y="18.11" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #e1e2e2;opacity: 0.24;"  x="17.65" y="17.66" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #dfdfe0;opacity: 0.25;"  x="17.2" y="17.22" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #dcddde;opacity: 0.27;"  x="16.75" y="16.77" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #dadadb;opacity: 0.29;"  x="16.31" y="16.32" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #d7d8d9;opacity: 0.31;"  x="15.86" y="15.87" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #d5d5d6;opacity: 0.33;"  x="15.41" y="15.42" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #d2d3d4;opacity: 0.35;"  x="14.96" y="14.98" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #d0d0d2;opacity: 0.37;"  x="14.51" y="14.53" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #cdcecf;opacity: 0.39;"  x="14.06" y="14.08" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #cbcccd;opacity: 0.41;"  x="13.62" y="13.63" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #c8c9ca;opacity: 0.43;"  x="13.17" y="13.18" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #c6c7c8;opacity: 0.45;"  x="12.72" y="12.73" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #c3c4c6;opacity: 0.47;"  x="12.27" y="12.29" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #c1c2c3;opacity: 0.49;"  x="11.82" y="11.84" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #bebfc1;opacity: 0.51;"  x="11.38" y="11.39" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #bcbdbe;opacity: 0.53;"  x="10.93" y="10.94" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #b9babc;opacity: 0.55;"  x="10.48" y="10.49" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #b7b8ba;opacity: 0.57;"  x="10.03" y="10.05" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #b4b5b7;opacity: 0.59;"  x="9.58" y="9.6" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #b2b3b5;opacity: 0.61;"  x="9.13" y="9.15" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #afb1b2;opacity: 0.63;"  x="8.69" y="8.7" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #adaeb0;opacity: 0.65;"  x="8.24" y="8.25" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #aaacae;opacity: 0.67;"  x="7.79" y="7.8" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #a8a9ab;opacity: 0.69;"  x="7.34" y="7.36" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #a5a7a9;opacity: 0.71;"  x="6.89" y="6.91" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #a3a4a6;opacity: 0.73;"  x="6.45" y="6.46" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #a0a2a4;opacity: 0.75;"  x="6" y="6.01" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #9e9fa2;opacity: 0.76;"  x="5.55" y="5.56" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #9b9d9f;opacity: 0.78;"  x="5.1" y="5.12" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #999b9d;opacity: 0.8;"  x="4.65" y="4.67" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #96989b;opacity: 0.82;"  x="4.21" y="4.22" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #949698;opacity: 0.84;"  x="3.76" y="3.77" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #919396;opacity: 0.86;"  x="3.31" y="3.32" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #8f9193;opacity: 0.88;"  x="2.86" y="2.87" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #8c8e91;opacity: 0.9;"  x="2.41" y="2.43" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #8a8c8f;opacity: 0.92;"  x="1.96" y="1.98" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #87898c;opacity: 0.94;"  x="1.52" y="1.53" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #85878a;opacity: 0.96;"  x="1.07" y="1.08" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #828487;opacity: 0.98;"  x="0.62" y="0.63" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                                <rect style="fill: #808285;"  x="0.17" y="0.19" width="285.37" height="285.4" rx="53.65" ry="53.65" />
                            </g>
                            <rect :style="'fill: url(#linear-gradient' + index +')'"  width="285.71" height="285.71" rx="53.71" ry="53.71" />
                            <rect :style="'fill: url(#linear-gradient-2' + index + ')'"  x="2.29" y="2.29" width="281.14" height="281.14" rx="51.43" ry="51.43" />
                        </g>
                    </g>
                </g>
                </svg>
            -->
            <div @click="clickHandler" :data-id="index + 1" v-html="item.key" class="pic" ref='pic'>
                
            </div>
            <!-- <div @click="clickHandler" :data-id="index + 1" class="abs">
                <p v-html="item.key"></p>
            </div> -->
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
                s[0].cube.classList.remove('selected')
                s[1].cube.classList.remove('selected')

                if (s[0].pair_id == s[1].pair_id) {
                    s[0].cube.classList.add('found')
                    s[1].cube.classList.add('found')

                    setTimeout(async() => {
                        s[0].cube.parentElement.style.visibility = 'hidden'
                        s[1].cube.parentElement.style.visibility = 'hidden'
                        let gamefinished = await this.$store.dispatch('add_found_pair', s[0].pair_id)
                    }, 200);
                }
                    this.selected = [];

            }

        },
        resizeHandler() {
            let el = document.querySelector('.pic')
            if(!el)
                return
            console.log('resized')
            let root = document.querySelector('#game')
            root.style.setProperty('--width', el.offsetWidth + 'px')
        },
        debounce(func, wait, immediate) {
            // console.log('123')
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
        console.log('mounted')
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

.selected {
    background: linear-gradient( 37deg, rgba(6, 108, 143, 0.5) -20%, rgba(6, 143, 17, 0.473) 60%)!important;
}
.found{
    transform: scale(1.2);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0,35% 41%, 0 40%,  40% 51%, 0 64%, 39% 57%, 0 100%, 2% 100%, 43% 63%, 50% 100%, 51% 61%, 85% 99%, 58% 58%, 100% 57%, 61% 52%, 100% 21%, 61% 41%, 76% -8%, 49% 43%, 41% 0%, 41% 42%);
}
#game{
    --width: 120px;
}
.pic{
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient( 37deg, rgba(6, 108, 143, 0.5) -20%, rgba(6, 108, 143,1) 60%);
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


