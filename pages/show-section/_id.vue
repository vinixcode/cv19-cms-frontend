<template>
  <div>
    <div class="pl-1 mt-4 pl-sm-7">
      <v-btn
        color="grey lighten-1"
        class="px-8 mr-1 mr-sm-2 mb-2"
        dark
        to="/section"
        >Back</v-btn
      >
      <v-btn
        color="#014D4E"
        class="px-8 mr-1 mr-sm-2 mb-2"
        dark
        @click="editSection(section.id)"
        >Edit</v-btn
      >
      <!-- <v-btn
        class="px-8 mr-1 mr-sm-2 mb-2"
        color="red darken-4"
        dark
        @click="deleteContentDialog = true"
        >Delete</v-btn
      > -->

      <v-card max-width="1000" class="mt-10 pb-5">
        <v-toolbar class="card-content" dark flat>
          <v-toolbar-title
            ><b>Content </b> {{ section.section.code }}</v-toolbar-title
          >
        </v-toolbar>

        <div class="ml-0 px-3 ml-sm-2 px-sm-3 pt-5">
          <p class="mb-1">
            <b class="header">ID: </b>
            <span>{{ section.id }}</span>
          </p>
          <p class="mb-1">
            <b class="header">Section Code: </b>
            <span>{{ section.section.code }}</span>
          </p>

          <p class="mb-1">
            <b class="header">Content Code: </b>
            <span>{{ section.content.code }}</span>
          </p>
          <p class="mb-1">
            <b class="header">Sort: </b>
            <span>{{ section.sort }}</span>
          </p>
          <p class="mb-1">
            <b class="header">Content Title: </b>
            <span>{{ section.content.title }}</span>
          </p>
          <div class="mb-1">
            <p class="mb-0"><b class="header">Content Body: </b></p>
            <div
              v-for="display in section.content.body.display_languages"
              :key="display.id"
            >
              <span v-html="display.text"></span>
            </div>
          </div>
        </div>
      </v-card>
    </div>

    <!--Dialog Delete content -->
    <v-dialog v-model="deleteContentDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text> This action cannot be reversed. </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="deleteContentDialog = false"> Cancel </v-btn>
          <!-- <v-btn color="red" text @click="deleteContent(content.contentId)">
            Delete
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--/ Dialog Delete content -->
  </div>
</template>

<script>
import Backend from '@/services/NodeService.js'

export default {
  data() {
    return {
      deleteContentDialog: false,
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

      // if (data.descDisplay === null) {
      //   this.content.descDisplay.displayText = ''
      // } else {
      //   this.content.descDisplay.displayText = this.removeTags(
      //     data.descDisplay.displayText
      //   )
      // }

      this.section.id = data.id
      this.section.section.code = data.section.code
      this.section.content.code = data.content.code
      this.section.sort = data.sort
      this.section.content.title = data.content.title
      this.section.content.body.display_languages =
        data.content.body.display_languages
    })
  },
  methods: {
    removeTags(str) {
      if (str === null || str === '') return false
      else str = str.toString()

      return str.replace(/(<([^>]+)>)/gi, '')
    },
    editSection(id) {
      this.$router.push('/edit-section/' + id)
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
}
</script>

<style lang="scss" scoped>
.card-content {
  background-color: #0277bd !important;
}
</style>
