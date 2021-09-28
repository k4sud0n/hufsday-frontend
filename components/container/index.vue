<template>
  <div class="flex mt-5 md:mx-24 md:space-x-4">
    <LeftContainer />
    <MainContainer />
    <RightContainer />
  </div>
</template>

<script>
import LeftContainer from './left-container/index.vue'
import MainContainer from './main-container/index.vue'
import RightContainer from './right-container/index.vue'

export default {
  components: {
    LeftContainer,
    MainContainer,
    RightContainer,
  },
}
</script>
