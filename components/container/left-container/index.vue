<template>
  <div class="hidden lg:block lg:flex-none lg:w-44">
    <Menu />
    <QuickLink />
    <Copyright />
  </div>
</template>

<script>
import Menu from './menu/Menu.vue'
import QuickLink from './quick-link/QuickLink.vue'
import Copyright from './copyright/Copyright.vue'

export default {
  components: {
    Menu,
    QuickLink,
    Copyright,
  },
}
</script>
