<template>
  <div class="flex-grow">
    <Notice />
    <BoardList />
  </div>
</template>

<script>
import Notice from '../../notice/Notice.vue'
import BoardList from './board-list/BoardList.vue'

export default {
  components: {
    Notice,
    BoardList,
  },
}
</script>
