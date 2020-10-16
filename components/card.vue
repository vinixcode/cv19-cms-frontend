<template>
  <div
    :id="id"
    :draggable="draggable"
    class="card ma-3 d-flex justify-center align-center rounded elevation-2"
    @dragstart="dragStart"
    @dragover.stop
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: ['id', 'draggable'],
  methods: {
    dragStart: (e) => {
      const target = e.target
      e.dataTransfer.setData('card_id', target.id)
      setTimeout(() => {
        target.style.display = 'none'
      }, 0)
    },
  },
}
</script>

<style>
.card {
  background-color: #fff;
  cursor: move;
  height: 120px;
  transition-duration: 0.5s;
  transition-property: all;
  font-size: 18px;
  font-weight: 400;
}

.card:hover {
  background-color: rgb(255, 246, 227);
  transform: scale(1.05, 1.05);
  color: #1a237e;
  font-size: 20px;
  font-weight: 500;
}
</style>
