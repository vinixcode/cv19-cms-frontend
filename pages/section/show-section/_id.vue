<template>
  <v-container class="d-flex flex-column justify-center">
    <div>
      <v-btn
        color="grey lighten-1"
        class="px-8 mr-1 mr-sm-2 mt-2"
        dark
        to="/section/all"
        >&laquo; Back</v-btn
      >
    </div>
    <v-data-table
      :headers="headers"
      :items="data"
      sort-by="id"
      class="elevation-3 rounded-lg mt-5 mx-auto rule-card"
      :items-per-page="30"
    >
      <template v-slot:top>
        <v-toolbar class="light-blue darken-3 rounded-t-lg rule-card" flat>
          <v-toolbar-title class="white--text"
            >Content by Section: <b>{{ section }}</b></v-toolbar-title
          >
          <v-spacer></v-spacer>
          <nuxt-link class="text-decoration-none" to="/create-content">
            <!-- <v-btn color="#FEAD01" dark class="">Create Section</v-btn> -->
          </nuxt-link>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          icon
          x-small
          color="#014D4E"
          :to="'/content/edit-content/' + item.content_id"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn
          icon
          x-small
          color="light-blue darken-3"
          :to="'/content/show-content/' + item.content_id"
        >
          <v-icon>mdi-eye-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import Backend from '@/services/BackendService.js'
export default {
  data() {
    return {
      section: '',
      headers: [
        { text: 'Id', value: 'content_id' },
        { text: 'Code', value: 'code' },
        { text: 'Report Code', value: 'report_code' },
        { text: 'Report Description', value: 'report_descriptio' },
        { text: 'Section Id', value: 'section_id' },
        { text: 'Content Sort', value: 'content_sort' },
        { text: 'Language', value: 'language_id' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      data: [],
    }
  },
  created() {
    Backend.getAContentSection(this.$route.params.id).then((response) => {
      this.data = response.data
      this.section = response.data[0].section_code
    })
  },
  head: {
    title: 'Content by Section',
  },
}
</script>

<style lang="scss" scoped>
.card-content {
  background-color: #0277bd !important;
}
</style>
