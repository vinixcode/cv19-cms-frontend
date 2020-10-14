<template>
  <div>
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
            <v-btn color="orange darken-2" dark class="">
              Create Content
            </v-btn>
          </nuxt-link>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          color="light-blue darken-3"
          small
          class="mr-2"
          @click="editContent(item.contentId)"
        >
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>

    <!-- Snackabr content -->
    <v-snackbar v-model="snackbar" :multi-line="true" timeout="8500">
      {{ errorText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!--/ Snackabr content -->
  </div>
</template>

<script>
import Backend from '@/services/BackendService.js'
export default {
  data: () => ({
    dialog: false,
    snackbar: false,
    errorText: '',
    headers: [
      { text: 'ID', value: 'contentId' },
      { text: 'Sort', value: 'sort' },
      { text: 'Code', value: 'contentCode' },
      { text: 'Title', value: 'nameDisplay.displayText' },
      { text: 'Description', value: 'descDisplay.displayText' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    data: [],
  }),
  created() {
    this.initialize()
  },
  mounted() {
    if (this.$route.query.msg === 'created') {
      this.snackbar = true
      this.errorText = 'Content created successfully.'
    }
  },
  methods: {
    initialize() {
      Backend.getContent().then((response) => {
        this.data = response.data
      })
    },
    editContent(id) {
      this.$router.push('/edit-content/' + id)
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
