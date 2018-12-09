<template>
<div :class="{'columns is-mobile w100':true, }">
    <div :class="{'column is-two-fifths-fullhd is-two-fifths-widescreen is-three-fifths-desktop is-half-tablet is-four-fifths-mobile wrapper':true, 'overlay': !game_ready_state}">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="blur-svg">
            <defs>
                <filter id="blur-filter">
                    <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                </filter>
            </defs>
            </svg>
        <div id="timeout" v-if="game_ready_state">
            <span id="countdown"></span>
        </div>
        <div class="columns is-mobile" ref="loop" id="game">
            <div class="column is-one-third" v-for="(item, index) in game_words" :key="index">
                <div class="rel">
                    <svg viewBox="0 0 308.4 308.4">
                        <defs>
                            <linearGradient id="linear-gradient" x1="10" y1="142.86" x2="-275.71" y2="142.86" gradientTransform="matrix(-1, 0, 0, 1, 10, 0)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#fff" />
                                <stop offset="1" stop-color="#d1d3d4" />
                            </linearGradient>
                            <linearGradient id="linear-gradient-2" x1="7.71" y1="142.86" x2="-273.43" y2="142.86" gradientTransform="matrix(-1, 0, 0, 1, 10, 0)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#d1d3d4" />
                                <stop offset="1" stop-color="#fff" />
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
                                    <rect style="fill: url(#linear-gradient);"  width="285.71" height="285.71" rx="53.71" ry="53.71" />
                                    <rect style="fill: url(#linear-gradient-2);"  x="2.29" y="2.29" width="281.14" height="281.14" rx="51.43" ry="51.43" />
                                </g>
                            </g>
                        </g>
                        </svg>
                    <div @click="clickHandler" :data-id="index + 1" class="abs">
                        <p v-html="item.key"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns fixed">
            <div class="column">
                <v-btn><v-icon>arrow_back</v-icon></v-btn>
            </div>
            <v-spacer></v-spacer>
            <div class="column">
                <v-btn><v-icon>pause</v-icon></v-btn>
            </div>
        </div>

    </div>
    <div v-if="button_state" id="start_button" @click="start_game">
        <v-btn>Start</v-btn>
    </div>
    
    <v-dialog :value="game_finished" width="500">
        <v-card>
            <v-card-text :style="{'text-align':'center', color: (game_status)?'#4BB543':'#ED5249'}">
                {{(game_status)?"You won, but It's not over!": 'You Suck!!! Try Again!'}}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn color="primary" :to="{name: 'games'}" flat @click="dialog = false">
                    back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="again">
                    try again
                </v-btn>
                
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
var x;
import {mapGetters} from 'vuex'
export default {
    layout: 'game',
    data() {
        return {
            button_state: true,
            selected: [],
        }
    },
    mounted() {
        let vueThis = this;

    },
    computed: {
        ...mapGetters([
            'game_words',
            'game_ready_state',
            'timeout',
            'game_status',
            'game_finished',
        ])
    },
    methods: {
        again(){
            this.$store.dispatch('hacume')
        },
        start_game() {
            this.button_state = false;
            let vue = this
            window.addEventListener('start', () => {
                vue.$nextTick(()=>{
                    this.countdown()
                })
            });
            this.$store.dispatch('hacume')
            window.addEventListener('end', () => this.$store.dispatch('finish'));
        },
        countdown() {
            let countDownTime = 30;
            let el = document.getElementById("countdown")
            el.innerHTML = countDownTime;
            x = setInterval(function () {
                --countDownTime;
                el.innerHTML = countDownTime
                if (countDownTime == 0) {
                    clearInterval(x)
                    window.dispatchEvent(new Event('end'));
                }
            }, 1000);
        },
        async clickHandler(e) {
            // if (e.target.tagName !== 'DIV' && e.target.tagName !== 'P'){
            //     return
            // }
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
                    s[0].cube.parentElement.style.visibility = 'hidden'
                    s[1].cube.parentElement.style.visibility = 'hidden'
                    let gamefinished = await this.$store.dispatch('add_found_pair', s[0].pair_id)
                    if (gamefinished == true) {
                        clearInterval(x)
                    }
                }
                s[0].cube.classList.remove('selected')
                s[1].cube.classList.remove('selected')

                this.selected = [];
            }

        },
    },
    watch: {
        selected() {
        }
    }
}
</script>

<style>
.fixed{
    position: absolute;
    bottom: 0;
    width: 100%;
}
#game {
    padding: 30px 0;
}

#start_button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

#timeout {
    opacity: 0.3;
    width: 100%;
    height: 100%;
    font-size: calc(20vw + 40vh);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
    /* height: 100%; */
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
