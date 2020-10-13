<template>
  <v-layout>
    <v-flex xs12 class="d-flex">
      <v-card class="my-10 mx-10" elevation="4">
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
        <v-form ref="form" class="text-center mx-5">
          <div>
            <v-text-field
              filled
              prepend-inner-icon="mdi-xml"
              placeholder="Code"
            ></v-text-field>
            <v-text-field
              class="mb-8"
              filled
              hide-details
              single-line
              prepend-inner-icon="mdi-xml"
              type="number"
              placeholder="Sort"
            />
            <v-text-field
              filled
              prepend-inner-icon="mdi-format-text"
              placeholder="Title"
            ></v-text-field>

            <vue-editor v-model="content"></vue-editor>
          </div>

          <v-card-actions class="my-5 pl-0">
            <v-btn color="orange darken-2" dark>Create Content</v-btn>
          </v-card-actions>

          <!-- <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
            <v-expansion-panel class="mb-8">
              <v-expansion-panel-header
                >Associated Rule</v-expansion-panel-header
              >
              <v-expansion-panel-content> Rule </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels> -->
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
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
      content: 'Text comment',
    }
  },
  head: {
    title: 'Create Content',
  },
}
</script>

<style></style>
