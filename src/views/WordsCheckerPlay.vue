<template>
<v-container class="h100">
    <div class="grid" ref="grid">
        <div v-for="i in game_words" :key="i.id" id="box">
            <div>{{i.key}}</div>
        </div>
    </div>
    <v-btn :to="{name: 'home'}">Back</v-btn>
</v-container>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
        }
    },
    mounted() {
        let vueThis = this;
        this.$store.dispatch('hacume')
        window.addEventListener('resize', handler)
        function handler() {
            let s = window.innerWidth;
            if (window.innerHeight >= window.innerWidth) {
                s = window.innerHeight
            }
            vueThis.$refs.grid.style.gridGap = '10px';
            let v = '30vw'
            if(window.innerWidth > 906){
                v ='20vh'
            }else if(window.innerWidth > 600) {
                v ='25vw'
            }else{
                vueThis.$refs.grid.style.gridGap = '5px';
            }
            vueThis.$refs.grid.style.setProperty('--w', v)
        }
        handler();
    },
    computed: {
        game_words_chunks() {
            let chunks = [];
            let i, j, temparray, chunk = 3;
            for (i = 0, j = this.game_words.length; i < j; i += chunk) {
                temparray = this.game_words.slice(i, i + chunk);
                chunks.push(temparray)
            }
            return chunks
        },

        ...mapGetters([
            'game_words',
            'game_ready_state'
        ])
    }
}
</script>

<style>
.grid{
    --w: 20vh;
    display: grid;
    justify-content: center;
    grid-template-columns: var(--w) var(--w) var(--w);
    grid-template-rows: var(--w) var(--w) var(--w) var(--w);
    grid-gap: 10px;
    justify-items: stretch;
    height: 100%;
    
}
main.v-content{
    padding: 0!important;
}
.h100{
    height: 100%;
}
html, body, .v-content__wrap{
    height: 100%;
}

#box {
    background-color: #999;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
#box div{
    text-align: center;
}
</style>