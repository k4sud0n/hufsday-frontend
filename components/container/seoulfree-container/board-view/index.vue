<template>
  <div class="flex-grow">
    <Notice />
    <BoardView />
  </div>
</template>

<script>
import Notice from '../../../notice/index.vue'
import BoardView from './BoardView.vue'

export default {
  components: {
    Notice,
    BoardView,
  },
}
</script>