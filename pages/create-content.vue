<template>
  <v-layout>
    <v-flex xs12 class="d-flex">
      <v-card class="my-10 mx-10" width="400px" max-width="400" elevation="4">
        <v-system-bar
          class="mb-10"
          height="50px"
          color="light-blue darken-3"
          dark
        >
          <v-toolbar-title class="white--text px-5"
            >Content</v-toolbar-title
          ></v-system-bar
        >
        <v-form ref="form" class="text-center mx-5">
          <v-text-field filled prepend-inner-icon="mdi-xml"></v-text-field>
          <v-text-field
            class="mb-8"
            filled
            hide-details
            single-line
            type="number"
            placeholder="0"
          />
          <v-text-field
            filled
            prepend-inner-icon="mdi-format-text"
          ></v-text-field>
          <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
            <v-expansion-panel class="mb-8">
              <v-expansion-panel-header
                >Associated Rule</v-expansion-panel-header
              >
              <v-expansion-panel-content> Rule </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-form>
      </v-card>
      <div>
        <v-card class="mt-10 mb-5 pa-2" elevation="4">
          <v-form ref="form" class="text-center px-2 py-2">
            <vue-editor v-model="content"></vue-editor>
          </v-form>
        </v-card>
        <nuxt-link class="text-decoration-none" to="/content">
          <v-btn color="orange darken-2 float-right" dark class="">
            Add Content
          </v-btn>
        </nuxt-link>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
let VueEditor

if (process.client) {
  VueEditor = require('vue2-editor').VueEditor
}
export default {
  head: {
    titleTemplate: 'CREATE-CONTENT',
  },
  data() {
    return {
      content: 'Text comment',
    }
  },
  components: {
    VueEditor,
  },
}
</script>

<style></style>
