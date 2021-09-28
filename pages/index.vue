<template>
  <div>
    <Header />
    <MainContainer />
  </div>
</template>

<script>
import Header from '../components/header/Header.vue'
import MainContainer from '../components/main-container/MainContainer.vue'

export default {
  components: {
    Header,
    MainContainer,
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
