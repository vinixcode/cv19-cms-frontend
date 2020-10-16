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
              prepend-inner-icon="mdi-xml"
              placeholder="Id"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="section.section.code"
              label="Section Code"
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Section Code"
            ></v-text-field>

            <v-text-field
              v-model="section.content.code"
              label="Content Code"
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Content Code"
            />

            <v-text-field
              v-model="section.sort"
              label="Sort"
              filled
              type="number"
              prepend-inner-icon="mdi-xml"
              placeholder="Sort"
            ></v-text-field>

            <v-text-field
              v-model="section.content.title"
              prepend-inner-icon="mdi-format-text"
              label="Section Title"
              filled
            ></v-text-field>
            <div
              v-for="display in section.content.body.display_languages"
              :key="display.id"
            >
              <v-textarea
                v-model="display.text"
                label="Section Body"
                filled
              ></v-textarea>
            </div>
          </div>

          <v-card-actions class="mb-5 pl-0">
            <!-- <v-btn color="#FEAD01" dark @click="editContent(content.contentId)"
              >Save</v-btn
            >
            <v-btn color="red darken-4" dark @click="deleteContentDialog = true"
              >Delete</v-btn
            > -->
            <v-btn color="grey lighten-1" dark to="/section">Back</v-btn>
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
import Backend from '@/services/NodeService.js'
export default {
  data() {
    return {
      deleteContentDialog: false,
      snackbar: false,
      errorText: '',
      section: {
        id: '',
        sort: '',
        section: {
          code: '',
        },
        content: {
          code: '',
          title: '',
          body: {
            display_languages: [],
          },
        },
      },
    }
  },
  created() {
    Backend.getASection(this.$route.params.id).then((response) => {
      const data = response.data

      if (data.content.title === null) {
        this.section.content.title = ''
      } else {
        this.section.content.title = data.content.title
      }

      this.section.id = data.id
      this.section.section.code = data.section.code
      this.section.content.code = data.content.code
      this.section.sort = data.sort
      this.section.content.title = data.content.title

      const dataText = []
      for (let i = 0; i < data.content.body.display_languages.length; i++) {
        dataText[i] = this.removeTags(
          data.content.body.display_languages[i].text
        )
        console.log(dataText[i])
      }
      this.section.content.body.display_languages = dataText
    })
  },
  methods: {
    removeTags(str) {
      if (str === null || str === '') return false
      else str = str.toString()

      return str.replace(/(<([^>]+)>)/gi, '')
    },
    editContent(id) {
      const data = {
        code: this.content.contentCode,
        sort: this.content.sort,
        title: this.content.nameDisplay.displayText,
        body: this.content.descDisplay.displayText,
      }
      Backend.updateContent(id, data)
        .then((response) => {
          this.$router.push('/content/?msg=updated')
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
          this.$router.push('/content/?msg=deleted')
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
