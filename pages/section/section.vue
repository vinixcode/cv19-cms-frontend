<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      sort-by="id"
      class="elevation-3 rounded-lg mt-10 mx-auto rule-card"
      :items-per-page="30"
    >
      <template v-slot:top>
        <v-toolbar class="light-blue darken-3 rounded-t-lg rule-card" flat>
          <v-toolbar-title class="white--text">Sections</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <nuxt-link class="text-decoration-none" to="/create-content">
            <v-btn color="#FEAD01" dark class="">Create Section</v-btn>
          </nuxt-link> -->
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <!-- <v-icon
          color="#014D4E"
          small
          class="mr-2"
          @click="editSection(item.id)"
        >
          mdi-pencil
        </v-icon> -->
        <!-- <v-icon
          color="red darken-4"
          small
          class="mr-2"
          @click="dialogContent(item.contentId)"
        >
          mdi-trash-can-outline
        </v-icon> -->
        <v-icon
          color="light-blue darken-3"
          small
          class="mr-2"
          @click="showSection(item.section_id)"
        >
          mdi-eye-outline
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Backend from '@/services/BackendService.js'
export default {
  data: () => ({
    headers: [
      { text: 'ID', value: 'section_id' },
      { text: 'Section Code', value: 'section_code' },
      { text: 'Page Id', value: 'page_id' },
      { text: 'Sort', value: 'sort' },
      { text: 'Display Id', value: 'display_id' },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    data: [],
  }),
  created() {
    Backend.getSections().then((response) => {
      this.data = response.data
      console.log(this.data)
    })
  },
  methods: {
    showSection(id) {
      this.$router.push('/section/show-section/' + id)
    },
  },
  head: {
    title: 'Sections',
  },
}
</script>
<style scoped>
.rule-card {
  max-width: 1000px;
}
</style>
