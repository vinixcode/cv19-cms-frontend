<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="id"
    class="elevation-3 rounded-lg mt-10 mx-auto rule-card"
  >
    <template v-slot:top>
      <v-toolbar class="light-blue darken-3 rounded-t-lg rule-card" flat>
        <v-toolbar-title class="white--text">Rules</v-toolbar-title>
        <v-spacer></v-spacer>
        <nuxt-link class="text-decoration-none" to="/rule/create-rule">
          <v-btn color="orange darken-2" dark class=""> Create Rule </v-btn>
        </nuxt-link>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon color="light-blue darken-3" small class="mr-2">
        mdi-eye {{ item }}</v-icon
      >
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Date', value: 'date' },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
  }),
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          id: 159,
          date: 6.0,
          description: 24,
        },
        {
          name: 'Ice cream sandwich',
          id: 237,
          date: 9.0,
          description: 37,
        },
        {
          name: 'Eclair',
          id: 262,
          date: 16.0,
          description: 23,
        },
        {
          name: 'Cupcake',
          id: 305,
          date: 3.7,
          description: 67,
        },
        {
          name: 'Gingerbread',
          id: 356,
          date: 16.0,
          description: 49,
        },
        {
          name: 'Jelly bean',
          id: 375,
          date: 0.0,
          description: 94,
        },
        {
          name: 'Lollipop',
          id: 392,
          date: 0.2,
          description: 98,
        },
        {
          name: 'Honeycomb',
          id: 408,
          date: 3.2,
          description: 87,
        },
        {
          name: 'Donut',
          id: 452,
          date: 25.0,
          description: 51,
        },
        {
          name: 'KitKat',
          id: 518,
          date: 26.0,
          description: 65,
        },
      ]
    },
  },
  head: {
    title: 'Rule',
  },
}
</script>
<style scoped>
.rule-card {
  max-width: 1000px;
}
</style>
