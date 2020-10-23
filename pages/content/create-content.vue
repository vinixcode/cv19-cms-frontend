<template>
  <v-layout>
    <v-flex xs12 class="d-flex">
      <v-card class="mt-5 mb-10 mx-10" elevation="4">
        <v-system-bar
          class="mb-10"
          height="50px"
          color="light-blue darken-3"
          dark
        >
          <v-toolbar-title class="white--text px-5"
            >Create Content</v-toolbar-title
          ></v-system-bar
        >
        <v-form ref="form" v-model="valid" class="text-center mx-5">
          <div>
            <v-text-field
              v-model="content.code"
              :rules="validationRules.code"
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Code"
            ></v-text-field>

            <v-text-field
              v-model="content.sort"
              :rules="validationRules.sort"
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Sort"
              type="number"
            ></v-text-field>

            <v-text-field
              v-model="content.title"
              filled
              prepend-inner-icon="mdi-format-text"
              placeholder="Title"
            ></v-text-field>

            <vue-editor v-model="content.body"></vue-editor>
          </div>

          <v-card-actions class="my-5 pl-0">
            <v-btn
              color="warning"
              class="btn-create"
              :disabled="!valid"
              @click="createContent"
              >Create Content</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>

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
    </v-flex>
  </v-layout>
</template>

<script>
import Backend from '@/services/BackendService.js'
let VueEditor

if (process.client) {
  VueEditor = require('vue2-editor').VueEditor
}
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      valid: false,
      snackbar: false,
      errorText: '',
      content: {
        sort: '',
        title: '',
        body: '',
        code: '',
        language: 'EN',
      },
      validationRules: {
        sort: [(v) => !!v || 'Sort is required'],
        code: [(v) => !!v || 'Code required'],
      },
    }
  },
  methods: {
    createContent() {
      const data = this.content
      Backend.createContent(data)
        .then((response) => {
          this.$router.push('/content/?msg=created')
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
    title: 'Create Content',
  },
}
</script>

<style>
.btn-create {
  color: white;
}
</style>
