<template>
    <div>
        <v-select v-for="filter in filters" :key="filter.name" @change="(val) => onChangeFilterValue(filter.name, val)"
            :items="filter.items" clearable :label="filter.label">
        </v-select>
    </div>
</template>

<script>
export default {
    name:'filters-component',
    props: {
        filters: Object,
    },
    methods: {
        onChangeFilterValue(name, val) {
            this.$emit('on-change-filter-value', name, val)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>