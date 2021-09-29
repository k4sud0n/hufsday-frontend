<template>
  <div>
    <div class="mt-4 flex space-x-4">
      <SeoulFree />
      <GlobalFree />
    </div>
    <div class="mt-4 flex space-x-4">
      <Wall />
      <Humor />
    </div>
  </div>
</template>

<script>
import SeoulFree from './seoul-free/SeoulFree.vue'
import GlobalFree from './global-free/GlobalFree.vue'
import Humor from './humor/Humor.vue'
import Wall from './wall/Wall.vue'

export default {
  components: {
    SeoulFree,
    GlobalFree,
    Wall,
    Humor,
  },
}
</script>
