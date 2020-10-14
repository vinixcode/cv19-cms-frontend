<template>
  <div class="container-report">
    <v-card
      class="px-5 toolbar-content"
      height="90vh"
      width="20%"
      color="indigo darken-4"
    >
      <v-toolbar-title class="white--text pa-5 text-center"
        >Content</v-toolbar-title
      >
      <v-card
        draggable
        class="mb-5 draggable d-flex justify-center align-center"
        color="grey lighten-1"
        height="80px"
        width="100%"
      >
        <p>Content</p>
      </v-card>

      <v-card
        draggable
        class="mb-5 draggable d-flex justify-center align-center"
        color="grey lighten-1"
        height="80px"
        width="100%"
      >
        <p>Content</p>
      </v-card>

      <v-card
        draggable
        class="mb-5 draggable d-flex justify-center align-center"
        color="grey lighten-1"
        height="80px"
        width="100%"
      >
        <p>Content</p>
      </v-card>

      <v-card
        draggable
        class="mb-5 draggable d-flex justify-center align-center"
        color="grey lighten-1"
        height="80px"
        width="100%"
      >
        <p>Content</p>
      </v-card>

      <v-card
        draggable
        class="mb-5 draggable d-flex justify-center align-center"
        color="grey lighten-1"
        height="80px"
        width="100%"
      >
        <p>Content</p>
      </v-card>

      <v-card
        draggable
        class="mb-5 draggable d-flex justify-center align-center"
        color="grey lighten-1"
        height="80px"
        width="100%"
      >
        <p>Content</p>
      </v-card>

      <v-card
        draggable
        class="mb-5 draggable d-flex justify-center align-center"
        color="grey lighten-1"
        height="80px"
        width="100%"
      >
        <p>Content</p>
      </v-card>

      <div class="d-flex justify-end update">
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
    <v-card
      elevation="4"
      class="px-5 pb-10 mb-10 mx-5 float-right"
      height="auto"
      width="75%"
    >
      <div
        class="d-flex justify-space-around font-weight-bold mt-10 blue--text"
      >
        <p>13/10/2020</p>
        <p class="mt-10 text-h3 font-weight-black">My CV19 CheckUp Report</p>
        <p>Save and Print</p>
      </div>
      <div>
        <p class="px-10 mt-5">
          BellAge, Inc. is pleased to provide you with this personalized report.
          We hope the information about your risks and our recommendations for
          how you might reduce them will help you be safer, healthier, and able
          to enjoy more in life.
        </p>
        <p class="red--text px-10">
          The information provided in this report is not medical advice. It
          cannot be used to diagnose or treat any medical condition.
        </p>
      </div>
      <div class="d-flex justify-space-around indigo darken-4 mt-10">
        <p class="text-h3 font-weight-bold white--text pt-3">
          My Severity Risk
        </p>
      </div>
      <div class="d-flex justify-space-around orange lighten-5">
        <v-alert
          class="pa-5 ma-5 d-flex"
          width="200px"
          height="150px"
          outlined
          elevation="4"
          >Drag Your item Here</v-alert
        >

        <v-alert
          class="pa-5 ma-5 d-flex justify-center"
          width="1000px"
          height="150px"
          outlined
          elevation="4"
          >Drag Your item Here</v-alert
        >
      </div>
      <div class="d-flex justify-space-around indigo darken-4 mt-10">
        <p class="text-h3 font-weight-bold white--text pt-3">
          My Infection and Spreader Risks
        </p>
      </div>
      <div class="d-flex justify-center orange lighten-5">
        <div>
          <p class="px-10 mt-5 blue--text font-weight-bold">
            Your chances of getting COVID-19 or giving it to others are based on
            all three of these RISK factors:
          </p>
        </div>
      </div>
      <div class="d-flex justify-center orange lighten-5 mb-5">
        <v-card elevation="4" class="blue lighten-5 my-5 mx-1">
          <v-alert
            class="pa-5 ma-5 d-flex justify-center"
            width="300px"
            height="200px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
          <v-alert
            class="pa-5 ma-5 d-flex justify-center"
            width="300px"
            height="200px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
        </v-card>
        <v-card elevation="4" class="blue lighten-5 my-5 mx-1">
          <v-alert
            class="pa-5 ma-5 d-flex justify-center"
            width="300px"
            height="200px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
          <v-alert
            class="pa-5 ma-5 d-flex justify-center"
            width="300px"
            height="200px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
        </v-card>
        <v-card elevation="4" class="blue lighten-5 my-5 mx-1">
          <v-alert
            class="pa-5 ma-5 d-flex justify-center"
            width="300px"
            height="200px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
          <v-alert
            class="pa-5 ma-5 d-flex justify-center"
            width="300px"
            height="200px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
        </v-card>
      </div>
      <div>
        <div class="d-flex justify-space-around mt-10">
          <p class="text-h3 font-weight-bold indigo--text text--darken-4 pt-3">
            Four Ways to Reduce My Risks
          </p>
        </div>
        <div class="d-flex">
          <div class="d-flex flex-column text-center px-5">
            <p class="text-h3 font-weight-bold blue--text pt-3">1</p>
            <p>Focus on being as healthy as possible.</p>
          </div>
          <div class="d-flex flex-column text-center px-5">
            <p class="text-h3 font-weight-bold blue--text pt-3">2</p>
            <p>Focus on being as healthy as possible.</p>
          </div>
          <div class="d-flex flex-column text-center px-5">
            <p class="text-h3 font-weight-bold blue--text pt-3">3</p>
            <p>Focus on being as healthy as possible.</p>
          </div>
          <div class="d-flex flex-column text-center px-5">
            <p class="text-h3 font-weight-bold blue--text pt-3">4</p>
            <p>Focus on being as healthy as possible.</p>
          </div>
        </div>
      </div>
      <div class="orange lighten-5">
        <div class="d-flex justify-space-around mt-10">
          <p class="text-h3 font-weight-bold indigo--text text--darken-4 pt-3">
            COVID-19 Spreads Easily
          </p>
        </div>
        <div class="pa-5">
          <v-alert
            class="d-flex justify-center"
            width="100%"
            height="200px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
        </div>
      </div>
      <div class="">
        <div class="ml-5 mt-10">
          <p class="text-h3 font-weight-bold indigo--text text--darken-4 pt-3">
            Recommendations and Resources
          </p>
          <p>
            Here are our recommendations for what you can do to be safer, be
            healthier, and get your needs met during the pandemic. Click on each
            header or the arrow at the end of the header for details.
          </p>
        </div>
      </div>
      <div class="orange lighten-5">
        <div class="d-flex justify-space-around mt-10">
          <p class="text-h3 font-weight-bold indigo--text text--darken-4 py-10">
            You can make a difference.
          </p>
        </div>
        <div class="d-flex justify-center">
          <v-alert
            class="d-flex justify-center"
            width="60%"
            height="300px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
        </div>
        <div class="d-flex justify-center">
          <v-alert
            class="d-flex justify-center"
            width="60%"
            height="300px"
            outlined
            elevation="4"
            >Drag Your item Here</v-alert
          >
        </div>
        <div class="d-flex justify-space-around mt-10">
          <p class="text-h3 font-weight-bold indigo--text text--darken-4">
            Together we will make a big difference.
          </p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Report Builder',
  },
}
</script>

<style>
.draggable {
  cursor: pointer;
}

.container-report {
  position: absolute;
}

.toolbar-content {
  position: fixed;
}
</style>
