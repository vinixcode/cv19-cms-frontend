<template>
  <v-data-table
    :headers="headers"
    :items="data"
    sort-by="id"
    class="elevation-3 rounded-lg mt-10 mx-auto rule-card"
    items-per-page="30"
  >
    <template v-slot:top>
      <v-toolbar class="light-blue darken-3 rounded-t-lg rule-card" flat>
        <v-toolbar-title class="white--text">Content</v-toolbar-title>
        <v-spacer></v-spacer>
        <nuxt-link class="text-decoration-none" to="/create-content">
          <v-btn color="orange darken-2" dark class=""> Create Content </v-btn>
        </nuxt-link>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon color="light-blue darken-3" small class="mr-2">
        mdi-eye {{ item }}
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import Backend from '@/services/BackendService.js'
export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: 'ID', value: 'contentId' },
      { text: 'Sort', value: 'sort' },
      { text: 'Title', value: 'nameDisplay.displayText' },
      { text: 'Description', value: 'descDisplay.displayText' },
    ],
    data: [],
  }),
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      Backend.getContent().then((response) => {
        this.data = response.data
      })
    },
  },
  head: {
    title: 'Content',
  },
}
</script>
<style scoped>
.rule-card {
  max-width: 1000px;
}
</style>
