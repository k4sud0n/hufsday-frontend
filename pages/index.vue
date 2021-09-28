<template>
  <div>
    <Header />
    <Container />
  </div>
</template>

<script>
import Header from '../components/header/index.vue'
import Container from '../components/container/index.vue'

export default {
  components: {
    Header,
    Container,
  },
}
</script>

<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
