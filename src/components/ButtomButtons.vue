<template>
<div class="columns is-mobile fixed">
        <div class="column">
            <v-btn :to="{name: 'home'}">
                <v-icon>arrow_back</v-icon>
            </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div class="column">
            <v-btn>
                <v-icon>pause</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BottomButtons'
}
</script>

<style>
.fixed {
    position: absolute;
    bottom: 0;
    width: 100%;
}

</style>
