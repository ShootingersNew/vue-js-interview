<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col cols="12" md="4">
        <filters-component :filters="filters" :active-filters.sync="activeFilters"></filters-component>
      </v-col>

      <v-col cols="12" md="4">
        <searched-users-component :users="users"></searched-users-component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FiltersComponent from "./FiltersComponent.vue"
import SearchedUsersComponent from "./SearchedUsersComponent.vue"
import ApiInstance from "@/api/index.js"
export default {
  name: 'ContentBlock',
  components: {
    FiltersComponent,
    SearchedUsersComponent
  },
  data: () => ({
    filters: {},
    variant: 'default',
    users: [],
    activeFilters: {}
  }),
  async mounted() {
    this.filters = await ApiInstance.filters.getFilters();
    this.users = await ApiInstance.users.getUsers();
  },
  watch: {
    activeFilters: {
      deep: true,
      async handler() {
        const appliedFilters = []
        Object.entries(this.activeFilters).forEach(([key, val]) => {
          if (val) appliedFilters.push(({ name: key, value: val.value }))
        })
        this.users = await ApiInstance.users.getUsers(appliedFilters)
        this.$store.commit('setActiveFilters', appliedFilters)
      }
    },
  }
}
</script>
