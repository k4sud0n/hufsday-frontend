<template>
  <header class="border-b border-gray-200 bg-white">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        px-5
        py-4
        flex-col
        md:flex-row
        items-center
      "
    >
      <Logo />
      <TextLogo />
      <SideMenu />
    </div>
  </header>
</template>

<script>
import Logo from './logo/Logo.vue'
import TextLogo from './logo/TextLogo.vue'
import SideMenu from './search/Search.vue'

export default {
  components: {
    Logo,
    TextLogo,
    SideMenu,
  },
}
</script>
