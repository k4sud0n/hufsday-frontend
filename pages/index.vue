<template>
  <div class="flex mt-4 md:mt-5 md:mx-24 md:space-x-6 mb-10 md:mb-20">
    <LeftContainer />
    <IndexContainer />
    <RightContainer />
  </div>
</template>

<script>
import LeftContainer from '../components/container/left-container/index.vue'
import IndexContainer from '../components/container/index-container/index.vue'
import RightContainer from '../components/container/right-container/index.vue'

export default {
  components: {
    LeftContainer,
    IndexContainer,
    RightContainer,
  },
}
</script>
