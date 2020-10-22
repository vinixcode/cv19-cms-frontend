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
        <v-icon
          color="#014D4E"
          small
          class="mr-2"
          @click="editSection(item.section_id)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          color="red darken-4"
          small
          class="mr-2"
          @click="dialogSection(item.section_id)"
        >
          mdi-trash-can-outline
        </v-icon>
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

    <!--Dialog Delete section -->
    <v-dialog v-model="deleteSectionDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text> This action cannot be reversed. </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="deleteSectionDialog = false">Cancel</v-btn>
          <v-btn color="red darken-4" text @click="deleteSection()"
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--/ Dialog Delete section -->

    <!-- Snackabr section -->
    <v-snackbar v-model="snackbar" :multi-line="true" timeout="6000">
      {{ errorText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!--/ Snackabr section -->
  </div>
</template>

<script>
import Backend from '@/services/BackendService.js'
export default {
  data: () => ({
    idDelele: '',
    deleteSectionDialog: false,
    snackbar: false,
    errorText: '',
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
  mounted() {
    if (this.$route.query.msg === 'created') {
      this.snackbar = true
      this.errorText = 'Section created successfully.'
    } else if (this.$route.query.msg === 'deleted') {
      this.snackbar = true
      this.errorText = 'Section deleted successfully.'
    } else if (this.$route.query.msg === 'updated') {
      this.snackbar = true
      this.errorText = 'Section updated successfully.'
    } else {
      this.snackbar = false
    }
  },
  methods: {
    showSection(id) {
      this.$router.push('/section/show-section/' + id)
    },
    editSection(id) {
      this.$router.push('/section/edit-section/' + id)
    },
    dialogSection(id) {
      this.idDelele = id
      this.deleteSectionDialog = true
    },
    deleteSection() {
      Backend.deleteSection(this.idDelele)
        .then((response) => {
          this.deleteSectionDialog = false
          this.snackbar = true
          this.errorText = 'Section deleted successfully.'
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
    title: 'Sections',
  },
}
</script>
<style scoped>
.rule-card {
  max-width: 1000px;
}
</style>
