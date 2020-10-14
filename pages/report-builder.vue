<template>
  <v-app>
    <div class="update rounded elevation-4">
      <template>
        <a class="text-decoration-none" href="">
          <v-icon color="white" small class="mx-1"> mdi-eye </v-icon>
        </a>
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
    <v-row>
      <v-col md="3">
        <v-card class="px-5 pb-10 toolbar-content" color="indigo darken-4">
          <v-toolbar-title class="white--text pa-5 text-center"
            >Content</v-toolbar-title
          >
          <!-- Content -->
          <div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
            <div
              draggable
              class="mb-5 content-draggable d-flex justify-center align-center rounded elevation-4"
            >
              <p class="mt-4">Content</p>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col md="9">
        <v-card
          elevation="4"
          class="px-5 pb-10 mx-3 float-right"
          height="auto"
          width="100%"
        >
          <div
            class="d-flex justify-space-around font-weight-bold mt-10 blue--text"
          >
            <p>13/10/2020</p>
            <p class="mt-10 text-h3 font-weight-black">
              My CV19 CheckUp Report
            </p>
            <a href="">
              <p>Save and Print</p>
            </a>
          </div>
          <div>
            <p class="px-10 mt-5">
              BellAge, Inc. is pleased to provide you with this personalized
              report. We hope the information about your risks and our
              recommendations for how you might reduce them will help you be
              safer, healthier, and able to enjoy more in life.
            </p>
            <p class="red--text px-10">
              The information provided in this report is not medical advice. It
              cannot be used to diagnose or treat any medical condition.
            </p>
          </div>
          <!-- Report -->
          <div>
            <div class="">
              <v-card class="pa-3 mt-3">
                <div class="new-item d-flex justify-center align-center">
                  <v-icon size="60" color="gray">mdi-plus</v-icon>
                </div>
              </v-card>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.content-draggable {
  background-color: #fff;
  cursor: move;
  height: 120px;
  transition-duration: 0.5s;
  transition-property: all;
  font-size: 18px;
}

.content-draggable:hover {
  background-color: rgb(255, 246, 227);
  transform: scale(1.05, 1.05);
  color: #1a237e;
  font-size: 20px;
}

.toolbar-content {
  position: fixed;
}

.new-item {
  border-style: dotted !important;
  border-width: 3px !important;
  border-color: gray;
  height: 300px;
  cursor: move;
}

.new-item:hover {
  background-color: rgb(255, 246, 227);
}

.update {
  background-color: #1a237e;
  padding: 5px;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 1;
}

.toolbar-content {
  overflow: auto !important;
  height: 83vh;
  width: 19vw;
}
</style>
