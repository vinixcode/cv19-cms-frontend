<template>
  <v-layout>
    <v-flex xs12 class="d-flex">
      <v-card class="my-10 mx-10" elevation="4" width="1000px">
        <v-system-bar
          class="mb-10"
          height="50px"
          color="light-blue darken-3"
          dark
        >
          <v-toolbar-title class="white--text px-5"
            >Edit Section</v-toolbar-title
          ></v-system-bar
        >
        <v-form ref="form" class="text-center mx-5">
          <div>
            <v-text-field
              v-model="section.id"
              label="Section Id"
              filled
              type="number"
              prepend-inner-icon="mdi-xml"
              placeholder="Id"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="section.pageId"
              label="Page Id"
              filled
              type="number"
              prepend-inner-icon="mdi-xml"
              placeholder="Section Code"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="section.sectionCode"
              label="Section Code"
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Section Code"
            ></v-text-field>

            <v-text-field
              v-model="section.sort"
              label="Sort"
              filled
              type="number"
              prepend-inner-icon="mdi-xml"
              placeholder="Section Code"
            ></v-text-field>

            <v-text-field
              v-model="section.displayId"
              label="Display Id"
              filled
              type="number"
              prepend-inner-icon="mdi-xml"
              placeholder="Sort"
              disabled
            ></v-text-field>

            <v-textarea
              v-model="section.description"
              label="Description"
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Sort"
            ></v-textarea>
          </div>

          <v-card-actions class="mb-5 pl-0">
            <v-btn color="#FEAD01" dark @click="editSection(section.id)"
              >Save</v-btn
            >
            <v-btn color="red darken-4" dark @click="deleteSectionDialog = true"
              >Delete</v-btn
            >
            <v-btn color="grey lighten-1" dark to="/section/all">Back</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>

    <!--Dialog Delete content -->
    <v-dialog v-model="deleteSectionDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text> This action cannot be reversed. </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="deleteSectionDialog = false"> Cancel </v-btn>
          <v-btn color="red" text @click="deleteSection(section.id)">
            Delete
          </v-btn>
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
  </v-layout>
</template>

<script>
import Backend from '@/services/BackendService.js'
export default {
  data() {
    return {
      deleteSectionDialog: false,
      snackbar: false,
      errorText: '',
      section: {},
    }
  },
  created() {
    Backend.getASection(this.$route.params.id).then((response) => {
      this.section = response.data
    })
  },
  methods: {
    editSection(id) {
      const data = {
        section_id: this.section.id,
        section_code: this.section.sectionCode,
        page_id: this.section.pageid,
        sort: this.section.sort,
        display_id: this.section.displayId,
        description: this.section.description,
      }

      Backend.updateSection(id, data)
        .then((response) => {
          this.$router.push('/section/all/?msg=updated')
        })
        .catch((error) => {
          if (error) {
            this.snackbar = true
            this.errorText = 'Something went wrong. Please try again later.'
          }
        })
    },
    deleteSection(id) {
      Backend.deleteSection(id)
        .then((response) => {
          this.$router.push('/section/all/?msg=deleted')
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
    title: 'Edit Section',
  },
}
</script>

<style></style>
