<template>
  <div id="app">
    <main class="d-flex mx-10">
      <board id="board-1" class="pa-5 ma-5">
        <card id="card-1" draggable="true">
          <p>Card One</p>
        </card>
      </board>
      <board id="board-2" class="pa-5 ma-5">
        <card id="card-2" draggable="true">
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

<style></style>
