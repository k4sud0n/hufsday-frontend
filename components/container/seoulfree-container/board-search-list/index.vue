<template>
  <div class="flex-grow">
    <Notice />
    <BoardSearchList />
  </div>
</template>

<script>
import Notice from '../../../notice/index.vue'
import BoardSearchList from './BoardSearchList.vue'

export default {
  components: {
    Notice,
    BoardSearchList,
  },
}
</script>
