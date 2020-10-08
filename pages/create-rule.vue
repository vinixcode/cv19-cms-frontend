<template>
  <v-layout align-center="center" justify-center="center">
    <v-flex xs12>
      <v-card
        class="py-10 pt-10 my-10 px-5 mx-auto"
        max-width="400"
        elevation="4"
      >
        <v-form ref="form" v-model="valid" class="text-center">
          <v-text-field
            filled
            prepend-inner-icon="mdi-identifier"
          ></v-text-field>

          <v-text-field filled prepend-inner-icon="mdi-xml"></v-text-field>

          <v-text-field
            filled
            prepend-inner-icon="mdi-format-text"
          ></v-text-field>

          <nuxt-link class="text-decoration-none" to="/rule">
            <v-btn class="white--text" color="orange darken-2">
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

}
</script>

<style>
</style>