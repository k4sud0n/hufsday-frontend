<template>
  <div>
    <Header />
    <div class="flex mt-4 md:mt-5 md:mx-24 md:space-x-6 mb-10 md:mb-20">
      <LeftMenu />
      <Nuxt />
      <RightMenu />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header/index.vue'
import LeftMenu from '../components/left-menu/index.vue'
import RightMenu from '../components/right-menu/index.vue'
import Footer from '../components/footer/index.vue'

export default {
  components: {
    Header,
    LeftMenu,
    RightMenu,
    Footer,
  },
  middleware: 'user-auth',
}
</script>

<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
