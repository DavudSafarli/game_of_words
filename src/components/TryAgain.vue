<template>
<v-dialog :value="game_finished" width="500">
    <v-card>
        <v-card-text :style="{'text-align':'center', color: (game_status)?'#4BB543':'#ED5249'}">
            {{(game_status)?"You won, but It's not over!": 'You Suck!!! Try Again!'}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn color="primary" :to="{name: 'home'}" flat>
                back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="$store.dispatch('hacume')">
                try again
            </v-btn>

        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    name: 'TryAgain',
    computed: {
        ...mapGetters([
            'game_finished',
            'game_status',
        ])
    }
}
</script>

<style>

</style>
