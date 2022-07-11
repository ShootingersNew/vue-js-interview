<template>
    <div>
        <v-card max-width="450" class="mx-auto">
            <v-list three-line>
                <template v-for="(item, index) in users">
                    <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

                    <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                    <user-tile-component v-else :key="index+'tile'" :item="item"></user-tile-component>
                </template>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import UserTileComponent from './UserTileComponent.vue'
export default {
    name: 'searched-users-component',
    components: {
      UserTileComponent  
    },
    props: {
        users: Array
    }
}
</script>

<style lang="scss" scoped>
</style>