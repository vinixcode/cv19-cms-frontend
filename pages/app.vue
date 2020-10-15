<template>
  <div id="app">
    <main class="d-flex mx-10">
      <board id="board-1" class="pa-5 ma-5">
        <card id="card-1" class="ma-3" draggable="true">
          <p>Card One</p>
        </card>
      </board>
      <board id="board-2" class="pa-5 ma-5">
        <card id="card-2" class="ma-3" draggable="true">
          <p>Card Two</p>
        </card>
      </board>
    </main>
  </div>
</template>

<script>
import board from '../components/board'
import card from '../components/card'
export default {
  name: 'App',
  components: {
    board,
    card,
  },
}
</script>

<style>
#board-1 {
  overflow: auto !important;
  height: 83vh;
  width: 19vw;
  background-color: #1a237e;
}

#board-2 {
  border-style: dotted !important;
  border-width: 3px !important;
  border-color: gray;
  height: 300px;
  cursor: move;
}
</style>
