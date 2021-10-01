<template>
  <div class="flex-grow">
    <Notice />
    <BoardList />
  </div>
</template>

<script>
import Notice from '../../../notice/index.vue'
import BoardList from './BoardList.vue'

export default {
  components: {
    Notice,
    BoardList,
  },
}
</script>
