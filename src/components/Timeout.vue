<template>
<div id="timeout" v-if="game_ready_state">
    <span id="countdown"></span>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    name: 'Timeout',
    computed: {
        ...mapGetters([
            'game_ready_state',
        ])
    },
}
</script>

<style>
#timeout {
    opacity: 0.3;
    width: 100%;
    height: 100%;
    font-size: calc(50vh);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

#countdown {
    align-self: flex-start;
}
</style>
