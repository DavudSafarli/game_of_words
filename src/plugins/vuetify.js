import Vue from 'vue'
import Vuetify, {
    VApp,
    VToolbar,
    VContainer,
    VContent,
    VSpacer,
    VToolbarItems,
    VBtn,
    VToolbarTitle,
    VMenu,
    VList,
    VListTile,
    VListTileContent,
    VIcon,
    VCard,
    VCardTitle,
    VDialog,
    VCardText,
    VDivider,
    VCardActions,
    VChip   

} from 'vuetify/lib'

import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify, {
    iconfont: 'md',
    components: {
        VApp,
        VToolbar,
        VContainer,
        VContent,
        VToolbarItems,
        VBtn,
        VToolbarTitle,
        VSpacer,
        VMenu,
        VList,
        VListTile,
        VListTileContent,
        VIcon,
        VCard,
        VCardTitle,
        VDialog,
        VCardText,
        VDivider,
        VCardActions,
        VChip   
    }
})
