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
            >Edit Content</v-toolbar-title
          ></v-system-bar
        >
        <v-form ref="form" class="text-center mx-5">
          <div>
            <v-text-field
              v-model="content.contentId"
              label="Content Id"
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Code"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="content.contentCode"
              label="Code"
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Code"
            ></v-text-field>

            <v-text-field
              v-model="content.sort"
              label="Sort"
              filled
              prepend-inner-icon="mdi-xml"
              type="number"
              placeholder="Sort"
            />

            <v-text-field
              v-model="content.nameDisplay.displayText"
              label="Title"
              filled
              prepend-inner-icon="mdi-format-text"
              placeholder="Title"
            ></v-text-field>

            <v-textarea
              v-model="content.descDisplay.displayText"
              label="Body"
              filled
            ></v-textarea>
          </div>

          <v-card-actions class="mb-5 pl-0">
            <v-btn color="#FEAD01" dark @click="editContent(content.contentId)"
              >Save</v-btn
            >
            <v-btn color="red darken-4" dark @click="deleteContentDialog = true"
              >Delete</v-btn
            >
            <v-btn color="grey lighten-1" dark to="/content/content"
              >Back</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>

    <!--Dialog Delete content -->
    <v-dialog v-model="deleteContentDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text> This action cannot be reversed. </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="deleteContentDialog = false"> Cancel </v-btn>
          <v-btn color="red" text @click="deleteContent(content.contentId)">
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
      deleteContentDialog: false,
      snackbar: false,
      errorText: '',
      content: {
        contentCode: '',
        contentId: '',
        sort: '',
        nameDisplay: {
          displayText: '',
        },
        descDisplay: {
          displayText: '',
        },
      },
    }
  },
  created() {
    Backend.getAContent(this.$route.params.id).then((response) => {
      const data = response.data

      if (data.nameDisplay === null) {
        this.content.nameDisplay.displayText = ''
      } else {
        this.content.nameDisplay.displayText = data.nameDisplay.displayText
      }

      if (data.descDisplay === null) {
        this.content.descDisplay.displayText = ''
      } else {
        this.content.descDisplay.displayText = data.descDisplay.displayText
      }

      this.content.contentId = data.contentId
      this.content.sort = data.sort
      this.content.contentCode = data.contentCode
    })
  },
  methods: {
    editContent(id) {
      const data = {
        code: this.content.contentCode,
        sort: this.content.sort,
        title: this.content.nameDisplay.displayText,
        body: this.content.descDisplay.displayText,
      }
      Backend.updateContent(id, data)
        .then((response) => {
          this.$router.push('/content/content/?msg=updated')
        })
        .catch((error) => {
          if (error) {
            this.snackbar = true
            this.errorText = 'Something went wrong. Please try again later.'
          }
        })
    },
    deleteContent(id) {
      Backend.deleteContent(id)
        .then((response) => {
          this.$router.push('/content/content/?msg=deleted')
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
    title: 'Edit Content',
  },
}
</script>

<style></style>
