<template>
  <div :id="id" class="board" @dragover.prevent @drop.prevent="drop">
    <slot />
  </div>
</template>

<script>
export default {
  props: { id: Number },
  methods: {
    drop: (e) => {
      const cardID = e.dataTransfer.getData('card_id')
      const card = document.getElementById(cardID)
      card.style.display = 'block'
      e.target.appendChild(card)
    },
  },
}
</script>

<style>
.board {
  width: 200px;
  height: 400px;
}
</style>
