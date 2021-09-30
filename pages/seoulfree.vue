<template>
  <div>
    <Header />
    <div class="flex mt-4 md:mt-5 md:mx-24 md:space-x-6 mb-10 md:mb-20">
      <LeftContainer />
      <SeoulFreeContainer />
      <RightContainer />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header/index.vue'
import LeftContainer from '../components/container/left-container/index.vue'
import SeoulFreeContainer from '../components/container/seoulfree-container/index.vue'
import RightContainer from '../components/container/right-container/index.vue'
import Footer from '../components/footer/index.vue'

export default {
  components: {
    Header,
    LeftContainer,
    SeoulFreeContainer,
    RightContainer,
    Footer,
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
