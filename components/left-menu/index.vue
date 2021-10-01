<template>
  <div class="hidden lg:block lg:flex-none lg:w-44">
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
    QuickLink,
  },
}
</script>
