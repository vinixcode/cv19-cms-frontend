<template>
  <v-app>
    <div class="update rounded elevation-2">
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
        <board class="board-1 elevation-2">
          <card id="card-1" draggable="true">
            <p class="mt-3">CONTENT</p>
          </card>
          <card id="card-2" draggable="true">
            <p class="mt-3">CONTENT</p>
          </card>
          <card id="card-3" draggable="true">
            <p class="mt-3">CONTENT</p>
          </card>
        </board>
      </v-col>
      <v-col md="9">
        <v-card elevation="4" class="pa-5" height="auto" width="100%">
          <div
            class="d-flex justify-space-around font-weight-bold mt-10 blue--text"
          >
            <p>16/10/2020</p>
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
          <div v-for="item in content" :key="item.id">
            <board class="board-2 pb-10 my-3"> </board>
          </div>
          <div class="text-center">
            <v-btn class="mx-2 my-3" fab elevation="2" color="primary">
              <v-icon dark @click="addBoard"> mdi-plus </v-icon>
            </v-btn>
            <v-btn
              class="mx-2 my-3"
              fab
              elevation="2"
              dark
              color="red accent-4"
            >
              <v-icon dark @click="removeBoard"> mdi-minus </v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import board from '../components/board'
import card from '../components/card'
export default {
  components: {
    board,
    card,
  },
  data() {
    return {
      content: 1,
      name: 'App',
    }
  },
  methods: {
    addBoard() {
      this.content += 1
    },
    removeBoard() {
      this.content -= 1
    },
  },
}
</script>

<style>
.board-1 {
  overflow: auto !important;
  height: 83vh;
  width: 19vw;
  background-color: #1a237e;
  border-radius: 5px;
  position: fixed;
}

.board-2 {
  border-style: dotted !important;
  border-width: 3px !important;
  border-color: gray;
  border-radius: 5px;
  height: auto;
  cursor: move;
  width: 100%;
}

.board-2:hover {
  background-color: rgb(227, 247, 255);
}

.update {
  background-color: #1a237e;
  padding: 5px;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 1;
}

.new-item {
  width: 100% !important;
}
</style>
