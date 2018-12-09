<template>
    <v-toolbar height="50" max-width="1200">
        <v-toolbar-items>
            <v-btn flat active-class="false height" :to="{name:'home'}">
                <v-toolbar-title class="headline text-uppercase">
                    <span>English</span>
                    <span class="font-weight-light">Game</span>
                </v-toolbar-title>
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="new_button" flat :to="{name:'game1'}">
                <v-chip class="new_chip" small color="red" text-color="white">new</v-chip>
                <span>Words Checker</span>
            </v-btn>
            <!-- <v-btn flat to="/game2"><span>Game 2</span></v-btn> -->
        </v-toolbar-items>

        <v-toolbar-items>
            <v-menu offset-y left>
                <v-btn flat slot="activator" color="secondary" class="white--text">
                    Games <v-icon>arrow_drop_down</v-icon>
                </v-btn>

                <v-list>
                    <v-list-tile active-class="false" :to="{name:'game1'}">
                        <v-list-tile-content>
                            Words Checker
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile active-class="false" to="/asdas">
                        <v-list-tile-content>
                            Game 2
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>

            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
.new_button{
    position: relative;
}
.new_button .v-chip{
    top: -20px;
    left: 90px;
    position: absolute;
    font-size: 10px;
    height: 20px;
}
.new_button .v-chip span{
    padding: 0 5px;
}

</style>
