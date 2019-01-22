<template>
<div id="timeout" v-if="['paused', 'loading', true, 'finished'].indexOf(game_state) != -1">
    <span id="countdown"></span>
</div>
</template>

<script>
import {
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    name: 'Timeout',
    computed: {
        ...mapGetters([
            'game_state'
        ])
    },
    methods: {
        ...mapMutations([
            'set_game_state',
            'set_offset',
        ]),
    },
    mounted() {
        // Set the name of the hidden property and the change event for visibility
        var vue = this
        var hidden, visibilityChange;
        var title = document.title;
        if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }

        var videoElement = document.getElementById("videoElement");

        // If the page is hidden, pause the video;
        // if the page is shown, play the video
        function handleVisibilityChange() {
            if (document[hidden]) {
                if(vue.game_state == true){
                    vue.set_game_state('paused')
                    vue.set_offset()
                    document.title = 'Paused';
                }
            } else {
                document.title = title;
            }
        }

        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === "undefined" || hidden === undefined) {
            console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
        } else {
            // Handle page visibility change   
            document.addEventListener(visibilityChange, handleVisibilityChange, false);
        }
    }
}
</script>

<style>
#timeout {
    user-select: none;
    cursor: default;
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
.danger{
    color: #EA2027;
    opacity: 0.7!important;
}
#countdown {
    transition: 0.3s;
    opacity: 0.3;
    align-self: flex-start;
}
</style>
