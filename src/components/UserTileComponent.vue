<template>
    <div>
        <v-list-item :key="item.title">
            <v-list-item-avatar>
                <v-tooltip :open-on-hover="false" v-model="isCountryOpened" bottom>
                <template  v-slot:activator="{ on }">
                    <v-img v-on="on" @click="clickHandler" :src="item.avatar"></v-img>
                    </template>
                    <span>{{item.countryName}}</span>
                </v-tooltip>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </div>
</template>

<script>
export default {
    name: 'user-tile-component',
    props: {
        item: Object
    },
    data: () => ({
        isCountryOpened: false
    }),
    methods: {
        clickHandler() {
        this.isCountryOpened = !this.isCountryOpened;
    }
    }
}
</script>

<style lang="scss" scoped>
</style>