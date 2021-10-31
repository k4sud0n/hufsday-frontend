<template>
  <div v-if="loading">
    <div class="inset-center z-50">
      <HashLoader :color="'#8d704f'" :size="80" :loading="loading" />
    </div>
  </div>
</template>

<script>
import { HashLoader } from '@saeris/vue-spinners'

export default {
  components: {
    HashLoader,
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.inset-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
