<template>
  <div class="px-1 py-3">
    <div class="text-xs text-gray-400">
      ⓒ {{ getCurrentYear }}. HUFSDAY all rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getCurrentYear() {
      const current = new Date()
      const currentYear = current.getFullYear()
      return currentYear
    },
  },
}
</script>
