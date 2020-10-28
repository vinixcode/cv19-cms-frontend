<template>
  <div>
    <div class="pl-1 mt-4 pl-sm-7">
      <v-btn
        color="grey lighten-1"
        class="px-8 mr-1 mr-sm-2 mb-2"
        dark
        to="/content/all"
        >&laquo; Back</v-btn
      >
      <v-btn
        color="#014D4E"
        class="px-8 mr-1 mr-sm-2 mb-2"
        dark
        @click="editContent(content.contentId)"
        >Edit</v-btn
      >
      <v-btn
        class="px-8 mr-1 mr-sm-2 mb-2"
        color="red darken-4"
        dark
        @click="deleteContentDialog = true"
        >Delete</v-btn
      >

      <v-card max-width="1000" class="mt-5 pb-5">
        <v-toolbar class="card-content" dark flat>
          <v-toolbar-title
            ><b>Content:</b> {{ content.contentCode }}</v-toolbar-title
          >
        </v-toolbar>

        <div class="ml-0 pl-7 ml-sm-2 pl-sm-10 pt-5">
          <p class="mb-1">
            <b class="header">ID: </b>
            <span>{{ content.contentId }}</span>
          </p>
          <p class="mb-1">
            <b class="header">Sort: </b>
            <span>{{ content.sort }}</span>
          </p>
          <p class="mb-1">
            <b class="header">Code: </b>
            <span>{{ content.contentCode }}</span>
          </p>
          <p class="mb-1">
            <b class="header">Title: </b>
            <span>{{ content.nameDisplay.displayText }}</span>
          </p>
          <p class="mb-1">
            <b class="header">Body: </b>
            <span>{{ content.descDisplay.displayText }}</span>
          </p>
          <p class="mb-1">
            <b class="header">Language ID: </b>
            <span>{{ content.descDisplay.languageId }}</span>
          </p>
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
          <v-btn color="red" text @click="deleteContent(content.contentId)">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--/ Dialog Delete content -->

    <!-- Snackbar content -->
    <v-snackbar v-model="snackbar" :multi-line="true" timeout="6000">
      {{ errorText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!--/ Snackbar content -->
  </div>
</template>

<script>
import Backend from '@/services/BackendService.js'
export default {
  data() {
    return {
      snackbar: false,
      errorText: '',
      deleteContentDialog: false,
      content: {
        contentCode: '',
        contentId: '',
        sort: '',
        nameDisplay: {
          displayText: '',
        },
        descDisplay: {
          displayText: '',
          languageId: '',
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
      this.content.descDisplay.languageId = data.descDisplay.languageId
    })
  },
  mounted() {
    if (this.$route.query.msg === 'created') {
      this.snackbar = true
      this.errorText = 'Content created successfully.'
    }
  },
  methods: {
    editContent(id) {
      this.$router.push('/content/edit-content/' + id)
    },
    deleteContent(id) {
      Backend.deleteContent(id)
        .then((response) => {
          this.$router.push('/content/all/?msg=deleted')
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
