<template>
<div>
    <v-navigation-drawer hide-overlay disable-resize-watcher clipped right v-model="drawer" app>
    </v-navigation-drawer>
    <v-toolbar fixed color="#ecf0f1" max-width="1200" dense clipped-left>
        <v-toolbar-items>
            <v-btn flat active-class="false height" :to="{name: 'home'}">
                <v-toolbar-title class="headline text-uppercase">
                    <span>English</span>
                    <span class="font-weight-light">Game</span>
                </v-toolbar-title>
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn active-class="" flat class="new_button" color="#74b9ff" :to="{name:'games'}">
                <span>Sign up</span>
            </v-btn>
            <v-btn active-class="" class="new_button" color="#74b9ff" :to="{name:'games'}">
                <span>Login</span>
            </v-btn>
            <!-- <v-btn small flat to="/game2"><span>Game 2</span></v-btn> -->
        </v-toolbar-items>
        <v-toolbar-items class="hidden-md-and-up">
            <v-toolbar-side-icon class="" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar-items>

    </v-toolbar>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
        drawer: false,
        items: [{
                icon: 'trending_up',
                text: 'Most Popular'
            },
            {
                icon: 'subscriptions',
                text: 'Subscriptions'
            },
            {
                icon: 'history',
                text: 'History'
            },
            {
                icon: 'featured_play_list',
                text: 'Playlists'
            },
            {
                icon: 'watch_later',
                text: 'Watch Later'
            }
        ],
        items2: [{
                picture: 28,
                text: 'Joseph'
            },
            {
                picture: 38,
                text: 'Apple'
            },
            {
                picture: 48,
                text: 'Xbox Ahoy'
            },
            {
                picture: 58,
                text: 'Nokia'
            },
            {
                picture: 78,
                text: 'MKBHD'
            }
        ]
    }),
    props: {
        source: String
    }
}
</script>

<style>
.new_button {
    position: relative;
    border-radius: 0!important;
}

.new_button .v-chip {
    top: -20px;
    left: 90px;
    position: absolute;
    font-size: 10px;
    height: 20px;
}

.new_button .v-chip span {
    padding: 0 5px;
}
</style>
