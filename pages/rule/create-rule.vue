<template>
  <v-layout align-center="center" justify-center="center" class="add-rule">
    <v-flex xs12>
      <v-card class="my-10 mx-auto" max-width="400" elevation="4">
        <v-system-bar
          class="mb-10"
          height="50px"
          color="light-blue darken-3"
          dark
        >
          <v-toolbar-title class="white--text px-5"
            >Rule</v-toolbar-title
          ></v-system-bar
        >
        <v-form ref="form" class="text-center mx-5">
          <v-text-field
            filled
            prepend-inner-icon="mdi-identifier"
          ></v-text-field>

          <v-text-field filled prepend-inner-icon="mdi-xml"></v-text-field>

          <v-text-field
            filled
            prepend-inner-icon="mdi-format-text"
          ></v-text-field>

          <nuxt-link class="text-decoration-none" to="/rule/all">
            <v-btn class="white--text mb-8" color="orange darken-2">
              Add Rule
            </v-btn>
          </nuxt-link>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head: {
    title: 'Create Rule',
  },
}
</script>

<style>
.container {
  height: 100% !important;
}
.add-rule {
  position: relative;
  top: 15%;
}
</style>
