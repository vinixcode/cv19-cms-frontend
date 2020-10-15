<template>
  <div
    :id="id"
    :draggable="draggable"
    class="card"
    @dragstart="dragStart"
    @dragover.stop
  >
    <p class="mt-4">Content</p>
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
  width: 100px;
  height: 100px;
  background-color: white;
}
</style>
