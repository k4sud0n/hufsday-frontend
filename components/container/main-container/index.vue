<template>
  <div class="flex-grow">
    <Notice />
    <ToolBox />
    <Advertisement />
  </div>
</template>

<script>
import Notice from './notice/Notice.vue'
import ToolBox from './toolbox/ToolBox.vue'
import Advertisement from './advertisement/Advertisement.vue'

export default {
  components: {
    Notice,
    ToolBox,
    Advertisement,
  },
}
</script>
