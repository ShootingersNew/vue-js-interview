<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col cols="12" md="4">
        <filters-component :filters="filters" @on-change-filter-value="onChangeFilterValue"></filters-component>
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
export default {
  name: 'ContentBlock',
  components: {
    FiltersComponent,
    SearchedUsersComponent
  },
  data: () => ({
    filters: {
      country: {
        name: 'country',
        label: 'Filter by country',
        items: ['Russia', 'Usa'],
        value: ''
      },
      score: {
        name: 'score',
        label: 'Filter by score',
        items: ['> 20', '< 10'],
        value: ''
      },
    },
    variant: 'default',
    users: [
      { header: 'List' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
  methods: {
    onChangeFilterValue(filterName, value) {
      this.$set(this.filters, `${filterName}`, { ...this.filters[filterName], value })
    }
  }
}
</script>
