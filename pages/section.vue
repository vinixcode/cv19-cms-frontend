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
          <v-toolbar-title class="white--text">Section</v-toolbar-title>
          <v-spacer></v-spacer>
          <nuxt-link class="text-decoration-none" to="/create-content">
            <!-- <v-btn color="#FEAD01" dark class="">Create Section</v-btn> -->
          </nuxt-link>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          color="#014D4E"
          small
          class="mr-2"
          @click="editSection(item.id)"
        >
          mdi-pencil
        </v-icon>
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
          @click="showSection(item.id)"
        >
          mdi-eye-outline
        </v-icon>
      </template>
    </v-data-table>

    <!--Dialog Delete content -->
    <v-dialog v-model="deleteSectionDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text> This action cannot be reversed. </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="deleteSectionDialog = false">Cancel</v-btn>
          <v-btn color="red darken-4" text @click="deleteContent()"
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--/ Dialog Delete content -->

    <!-- Snackabr content -->
    <v-snackbar v-model="snackbar" :multi-line="true" timeout="7000">
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
import Backend from '@/services/NodeService.js'
export default {
  data: () => ({
    idDelele: '',
    deleteSectionDialog: false,
    dialog: false,
    snackbar: false,
    errorText: '',
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Sort', value: 'sort' },
      { text: 'Section Code', value: 'section.code' },
      { text: 'Content Code', value: 'content.code' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    data: [],
  }),
  created() {
    Backend.getSections().then((response) => {
      this.data = response.data
    })
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
    editSection(id) {
      this.$router.push('/edit-section/' + id)
    },
    showSection(id) {
      this.$router.push('/show-section/' + id)
    },
    dialogContent(id) {
      this.idDelele = id
      this.deleteSectionDialog = true
    },
    deleteContent() {
      Backend.deleteContent(this.idDelele)
        .then((response) => {
          this.deleteSectionDialog = false
          this.snackbar = true
          this.errorText = 'Content deleted successfully.'
          Backend.getSections().then((response) => {
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
    title: 'Section',
  },
}
</script>
<style scoped>
.rule-card {
  max-width: 1000px;
}
</style>
