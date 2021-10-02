<template>
  <Login />
</template>

<script>
import Login from '../components/login/index.vue'

export default {
  components: {
    Login,
  },
  layout: 'login',
}
</script>

<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
