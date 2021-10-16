<template>
  <Register />
</template>

<script>
import Register from '../components/register/index.vue'

export default {
  auth: false,
  components: {
    Register,
  },
  layout: 'register',
}
</script>

<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
