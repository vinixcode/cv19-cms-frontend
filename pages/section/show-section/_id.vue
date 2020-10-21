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
          <v-toolbar-title class="white--text"
            >Content by <b>{{ section }}</b> Section</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <nuxt-link class="text-decoration-none" to="/create-content">
            <!-- <v-btn color="#FEAD01" dark class="">Create Section</v-btn> -->
          </nuxt-link>
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
  data() {
    return {
      section: '',
      headers: [
        { text: 'Content Id', value: 'content_id' },
        { text: 'Code', value: 'code' },
        { text: 'report_code', value: 'report_code' },
        { text: 'report_descriptio', value: 'report_descriptio' },
        { text: 'section_id', value: 'section_id' },
        { text: 'language_id', value: 'language_id' },
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
  methods: {},
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
