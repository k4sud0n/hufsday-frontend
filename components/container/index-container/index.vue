<template>
  <div class="flex-grow">
    <Notice />
    <ToolBox />
    <div class="bg-white rounded p-3 border border-gray-200 mt-4">
      <Advertisement />
    </div>
    <BoardContainer />
  </div>
</template>

<script>
import Advertisement from '../../advertisement/index.vue'
import Notice from '../../notice/index.vue'
import ToolBox from './toolbox/ToolBox.vue'
import BoardContainer from './board-container/index.vue'

export default {
  components: {
    Notice,
    ToolBox,
    Advertisement,
    BoardContainer,
  },
}
</script>
