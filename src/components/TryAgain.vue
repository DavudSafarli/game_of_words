<template>
<v-dialog persistent :value="game_state == 'finished'" width="500">
    <v-card>
        <v-card-text :style="{'text-align':'center', color: (user_state == true)?'#4BB543': (user_state == false)?'#ED5249':''}">
            {{(user_state)?"You won, but It's not over!": 'You Suck!!! Try Again!'}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn color="primary" flat @click="$store.dispatch('chooseLevel')">
                Change Level
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
            'user_state',
            'game_state'
        ])
    }
}
</script>

<style>

</style>
