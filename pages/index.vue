<template >
  <v-layout align-center="center" justify-center="center">
    <v-flex xs12>
      <v-card class="py-10 pt-10 my-10 px-5 mx-auto" max-width="400" elevation="4">
        <v-form ref="form" v-model="valid" class="text-center">
          <v-avatar
            color="primary"
            size="95"
            class="mb-5 avatar-login elevation-4"
          >
            <v-icon size="60" color="white">mdi-account</v-icon>
          </v-avatar>
          <v-text-field
            class="mt-5"
            filled
            label="Username"
            prepend-inner-icon="mdi-account"
          ></v-text-field>

          <v-text-field
            filled
            label="********"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>

          <div class="d-flex justify-space-around">
            <v-checkbox
              v-model="checkbox1"
              label="Remember me"
              class="mt-0 pt-0"
            ></v-checkbox>

            <a href="#" class="pb-4 font-italic">Forgot password?</a>
          </div>
          <nuxt-link to="/home">
          <v-btn class="white--text" color="light-blue darken-3" block> LOGIN </v-btn>
          </nuxt-link>
        </v-form>
      </v-card>
      <div class="text-center mt-3">
        <p>Copyright © 2020 BellAge, Inc.</p>
        <div>
          <img class="mx-3" width="200px" src="~/assets/bellage-logo.png" />
          <img class="mx-3" width="200px" src="~/assets/cv19-logo.png" />
        </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
  layout: 'default-2',
  head: {
    titleTemplate: 'LOGIN',
  },
}
</script>
<style lang="scss" scoped>
.avatar-login {
  position: absolute;
  top: -15%;
  left: 38%;
}

</style>