<template>
  <div class="flex-grow">
    <Notice />
    <ToolBox />
  </div>
</template>

<script>
import Notice from '../notice/Notice.vue'
import ToolBox from '../toolbox/ToolBox.vue'

export default {
  components: {
    Notice,
    ToolBox,
  },
}
</script>
