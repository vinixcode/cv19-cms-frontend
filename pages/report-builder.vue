<template>
  <div class="d-flex">
    <v-card class="px-5" height="90vh" width="20%" color="indigo darken-4">
      <v-toolbar-title class="white--text pa-5 text-center"
        >Content</v-toolbar-title
      >
      <v-card class="my-5" color="grey lighten-1" height="80px" width="100%">
      </v-card>
      <v-card class="my-5" color="grey lighten-1" height="80px" width="100%">
      </v-card>
      <v-card class="my-5" color="grey lighten-1" height="80px" width="100%">
      </v-card>
      <v-card class="my-5" color="grey lighten-1" height="80px" width="100%">
      </v-card>
      <v-card class="my-5" color="grey lighten-1" height="80px" width="100%">
      </v-card>
      <v-card class="my-5" color="grey lighten-1" height="80px" width="100%">
      </v-card>
      <v-card class="my-5" color="grey lighten-1" height="80px" width="100%">
      </v-card>
      <div class="d-flex justify-end">
        <template>
          <v-icon color="white" small class="mx-5"> mdi-eye </v-icon>
        </template>
        <nuxt-link class="text-decoration-none" to="">
          <v-btn
            class="white--text text-decoration-none"
            color="orange darken-2"
            small
          >
            UPDATE
          </v-btn>
        </nuxt-link>
      </div>
    </v-card>
    <v-card class="px-5 mx-5" height="90vh" width="100%"> </v-card>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: 'REPORT BUILDER',
  },
}
</script>

<style></style>
