<template>
  <div class="mt-4 flex space-x-4">
    <SeoulFreeboard />
    <GlobalFreeboard />
  </div>
</template>

<script>
import SeoulFreeboard from './seoul-freeboard/SeoulFreeboard.vue'
import GlobalFreeboard from './global-freeboard/GlobalFreeboard.vue'

export default {
  components: {
    SeoulFreeboard,
    GlobalFreeboard,
  },
}
</script>
