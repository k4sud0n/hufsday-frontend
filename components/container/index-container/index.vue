<template>
  <div class="flex-grow">
    <Notice />
    <ToolBox />
    <Advertisement />
    <BoardContainer />
  </div>
</template>

<script>
import Notice from './notice/Notice.vue'
import ToolBox from './toolbox/ToolBox.vue'
import Advertisement from './advertisement/Advertisement.vue'
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
