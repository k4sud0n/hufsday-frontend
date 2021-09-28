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
import Logo from './Logo.vue'
import TextLogo from './TextLogo.vue'
import SideMenu from './SideSearch.vue'

export default {
  components: {
    Logo,
    TextLogo,
    SideMenu,
  },
}
</script>
