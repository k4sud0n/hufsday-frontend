<template>
  <div class="flex mt-5 md:mx-24 md:space-x-4">
    <AsideMenu />
    <ContentContainer />
    <div
      class="
        invisible
        md:visible
        sm:invisible
        md:flex-none
        border border-gray-200
        md:w-48
      "
    >
      hi3
    </div>
  </div>
</template>

<script>
import AsideMenu from '../aside-menu/AsideMenu.vue'
import ContentContainer from '../content-container/ContentContainer.vue'

export default {
  components: {
    AsideMenu,
    ContentContainer,
  },
}
</script>
