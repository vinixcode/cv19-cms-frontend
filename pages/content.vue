<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      sort-by="id"
      class="elevation-3 rounded-lg mt-10 mx-auto rule-card"
      items-per-page="60"
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
        <v-icon
          color="red darken-4"
          small
          class="mr-2"
          @click="dialogContent(item.contentId)"
        >
          mdi-trash-can-outline
        </v-icon>
      </template>
    </v-data-table>

    <!--Dialog Delete content -->
    <v-dialog v-model="deleteContentDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text> This action cannot be reversed. </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="deleteContentDialog = false">Cancel</v-btn>
          <v-btn color="red" text @click="deleteContent()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--/ Dialog Delete content -->

    <!-- Snackabr content -->
    <v-snackbar v-model="snackbar" :multi-line="true" timeout="7500">
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
    idDelele: '',
    deleteContentDialog: false,
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
    } else if (this.$route.query.msg === 'updated') {
      this.snackbar = true
      this.errorText = 'Content updated successfully.'
    } else if (this.$route.query.msg === 'deleted') {
      this.snackbar = true
      this.errorText = 'Content deleted successfully.'
    } else {
      this.snackbar = false
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
    dialogContent(id) {
      this.idDelele = id
      this.deleteContentDialog = true
    },
    deleteContent() {
      Backend.deleteContent(this.idDelele)
        .then((response) => {
          this.deleteContentDialog = false
          this.snackbar = true
          this.errorText = 'Content deleted successfully.'
          Backend.getContent().then((response) => {
            this.data = response.data
          })
        })
        .catch((error) => {
          if (error) {
            this.snackbar = true
            this.errorText = 'Something went wrong. Please try again later.'
          }
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
  max-width: 1500px;
}
</style>
