<template>
  <div class="invisible md:visible md:flex-none md:w-44">
    <Menu />
    <QuickLink />
  </div>
</template>

<script>
import Menu from './menu/Menu.vue'
import QuickLink from './quick-link/QuickLink.vue'

export default {
  components: {
    Menu,
    QuickLink
  },
}
</script>
