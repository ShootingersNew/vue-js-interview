<template>
    <div>
        <v-select v-for="filter in filters" :key="filter.name" v-model="activeFilters[filter.name]"
            :items="filter.items" return-object clearable :label="filter.label">
        </v-select>
    </div>
</template>

<script>
export default {
    name: 'filters-component',
    props: {
        filters: Object,
        activeFilters: Object,
    },
    computed: {
        syncedActiveFilters: {
            get() {
                return this.activeFilters
            },
            set(val) {
                this.$emit('update:active-filters', val)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
</style>