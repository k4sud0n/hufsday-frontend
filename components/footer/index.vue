<template>
  <footer class="flex bg-white border-t border-gray-200 mt-10">
    <div class="py-3 pr-2 md:pl-24 text-gray-500 text-sm">
      © {{ getCurrentYear }} HUFSDAY
    </div>
    <div class="ml-auto py-3 pr-2 md:pr-24 text-gray-500 text-sm">
      문의: contact@hufsday.com
    </div>
  </footer>
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
