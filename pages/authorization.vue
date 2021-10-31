<template>
  <Authorization />
</template>

<script>
import Authorization from '@/components/authorization/index.vue'

export default {
  components: {
    Authorization,
  },
  layout: 'authorization',
}
</script>

<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
